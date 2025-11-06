
import { prisma } from "@/app/lib/prisma";
import Link from "next/link";

export default async function AlbumsPage() {
  const albums = await prisma.album.findMany();
  console.log(albums);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Albums</h1>
      <ul>
        {albums.map((a) => (
          <li key={a.id} className="border-b py-2">
            <Link href={`/albums/${a.id}`} className="text-blue-600 hover:underline">
              {a.title} — {a.artist}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
