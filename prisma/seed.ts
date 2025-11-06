import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const album1 = await prisma.album.create({
    data: {
      title: "Discovery",
      artist: "Daft Punk",
      cover: "/covers/discovery.jpg",
      tracks: {
        create: [
          { title: "One More Time", duration: 320 },
          { title: "Harder, Better, Faster, Stronger", duration: 224 },
        ],
      },
    },
  });
  console.log("Seeded:", album1);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
