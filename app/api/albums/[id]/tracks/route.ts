import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const tracks = await prisma.track.findMany({
    where: { albumId: Number(params.id) },
  });

  return NextResponse.json(tracks);
}
