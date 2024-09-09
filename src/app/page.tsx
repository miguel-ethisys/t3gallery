import { db } from "../server/db/index"


const mockUrls = [ 
  "https://utfs.io/f/c824cac8-b720-4336-9dca-8e2680e4411b-jjwqap.jpg",
  "https://utfs.io/f/ac71f6ad-6e0a-434c-a29b-4eca1d601f31-t5qe28.jpg",
  "https://utfs.io/f/429d5a8f-c4af-494f-8555-b381bf3fe6bb-6nahjc.jpg",
  "https://utfs.io/f/21ace75a-b784-459a-a2b5-9890dfb30f88-xpz200.jpg",
]

const mockImages = mockUrls.map((url, index) => ({
id: index + 1,
url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4" >
        {posts.map((post) => (
          <div key={post.id} >{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) =>(
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))
      }
      </div>
    </main>
  );
}
