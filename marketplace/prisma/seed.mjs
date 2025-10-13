import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const categories = [
    { name: "Technologie", slug: "technologie" },
    { name: "Mode", slug: "mode" },
    { name: "Beauté", slug: "beaute" },
    { name: "Maison", slug: "maison" },
    { name: "Alimentation", slug: "alimentation" },
  ];

  for (const c of categories) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: {},
      create: c,
    });
  }

  const seller = await prisma.seller.upsert({
    where: { email: "demo@entreprise.com" },
    update: { name: "Vendeur Démo" },
    create: {
      name: "Vendeur Démo",
      email: "demo@entreprise.com",
      role: "ENTREPRENEUR",
      company: "Demo SARL",
    },
  });

  const techno = await prisma.category.findUnique({ where: { slug: "technologie" } });
  const mode = await prisma.category.findUnique({ where: { slug: "mode" } });

  const products = [
    {
      title: "Casque Bluetooth Pro",
      description: "Casque sans fil avec réduction de bruit active.",
      priceCents: 7999,
      currency: "EUR",
      condition: "NEW",
      imageUrl: "https://images.unsplash.com/photo-1518442399789-6d1b12c2ea36?w=1200",
      status: "PUBLISHED",
      sellerId: seller.id,
      categoryId: techno?.id ?? null,
    },
    {
      title: "Sac en Cuir Artisanal",
      description: "Sac de qualité premium fabriqué à la main.",
      priceCents: 12999,
      currency: "EUR",
      condition: "NEW",
      imageUrl: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1200",
      status: "PUBLISHED",
      sellerId: seller.id,
      categoryId: mode?.id ?? null,
    },
  ];

  for (const p of products) {
    await prisma.product.create({ data: p });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
