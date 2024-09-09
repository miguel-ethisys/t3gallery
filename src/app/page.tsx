import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "../server/db/index"
import Image from 'next/image'

export const dynamic = "force-dynamic";

async function Images() {

  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4" >
    {images.map((image, index) =>(
        <div key={image.id + "-" + index} className="flex w-48 flex-col">
          <Image src={image.url} width={200} height={200} alt="image" />
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
