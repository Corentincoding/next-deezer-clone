import { prisma } from "@/app/lib/prisma";
import TracksList from "./TracksList";

interface AlbumPageProps {
  params: Promise<{ id: string }>;
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { id } = await params;
  const albumId = Number(id);

  if (!albumId) return <p>⚠️ ID d’album invalide</p>;

  const album = await prisma.album.findUnique({
    where: { id: albumId },
  });

  if (!album) return <p>❌ Album introuvable</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{album.title}</h1>
      <p className="text-gray-500">{album.artist}</p>
      <TracksList albumId={album.id} />
    </div>
  );
}
