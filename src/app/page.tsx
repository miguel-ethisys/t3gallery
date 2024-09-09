import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from 'next/image'
import { getMyImages } from "~/server/queries";


export const dynamic = "force-dynamic";

async function Images() {

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4" >
    {images.map((image, index) =>(
        <div key={image.id + "-" + index} className="flex h-48 w-48 flex-col">
          <Image src={image.url} style={{objectFit: "contain"}} height={192} width={192} alt={image.name} />
          <div>{image.name}</div>
        </div> 
      ))}
  </div>
  )
}

export default async function HomePage() {
  

  return (
    <main className="">

      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
