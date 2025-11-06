import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> } // params est une Promise
) {
  try {
    // ⚠️ await params
    const { id } = await context.params;

    const albumId = Number(id);
    if (isNaN(albumId)) {
      return NextResponse.json({ error: "ID d’album invalide" }, { status: 400 });
    }

    const tracks = await prisma.track.findMany({
      where: { albumId },
      orderBy: { id: "asc" },
    });

    return NextResponse.json({ tracks, debug: { id, albumId } });
  } catch (error) {
    console.error("Erreur API /albums/[id]/tracks:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
