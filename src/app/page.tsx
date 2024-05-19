import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/847cc9b3-ed72-4fc2-b90a-113605058955-c665yp.jpg",
  "https://utfs.io/f/e804e04e-386e-442d-9133-47e578389a30-2a5md.jpg",
  "https://utfs.io/f/f1a3cb0f-73c6-4938-bad5-faf941d2a045-gfy9qs.jpg",
  "https://utfs.io/f/abb48936-7eef-4736-a223-b7f710a674c4-lnn2w1.jpg",
  "https://utfs.io/f/8aa0b5c0-4f83-4b2d-856f-ab3e8a23e85c-r6cm4m.jpeg",
  "https://utfs.io/f/46aff8e3-fca4-4b65-b953-aa24aea90da5-c0s7ry.jpeg",
  "https://utfs.io/f/b0758294-f2f1-4cfa-8460-6b125c7cc1fa-gdjtvo.jpeg",
  "https://utfs.io/f/263b65ac-9f6a-4384-ac15-1905f91b445e-lyxrel.jpeg",
  "https://utfs.io/f/2c75ecb2-1e0c-4114-a981-c431ec5679ce-rnf8mq.jpeg",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
