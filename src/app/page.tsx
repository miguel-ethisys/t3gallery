
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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4" >{
        [...mockImages, ...mockImages, ...mockImages].map((image) =>(
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))
      }
      </div>
    </main>
  );
}
