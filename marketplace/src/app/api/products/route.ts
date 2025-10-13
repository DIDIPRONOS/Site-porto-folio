import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      priceCents,
      currency = "EUR",
      imageUrl = null,
      categorySlug = null,
      seller,
      status = "REVIEW",
    } = body;

    if (!title || !description || !seller?.email || !seller?.name) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
      }

    const category = categorySlug
      ? await prisma.category.findUnique({ where: { slug: String(categorySlug) } })
      : null;

    const sellerRecord = await prisma.seller.upsert({
      where: { email: String(seller.email) },
      update: {
        name: String(seller.name),
        company: seller.company ? String(seller.company) : null,
        role: seller.role === "COMMERCIAL" ? "COMMERCIAL" : "ENTREPRENEUR",
      },
      create: {
        name: String(seller.name),
        email: String(seller.email),
        company: seller.company ? String(seller.company) : null,
        role: seller.role === "COMMERCIAL" ? "COMMERCIAL" : "ENTREPRENEUR",
      },
    });

    const product = await prisma.product.create({
      data: {
        title: String(title),
        description: String(description),
        priceCents: Number(priceCents ?? 0),
        currency: String(currency),
        imageUrl: imageUrl ? String(imageUrl) : null,
        status: status === "PUBLISHED" ? "PUBLISHED" : status === "DRAFT" ? "DRAFT" : "REVIEW",
        sellerId: sellerRecord.id,
        categoryId: category?.id ?? null,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function GET() {
  const products = await prisma.product.findMany({ where: { status: "PUBLISHED" }, orderBy: { createdAt: "desc" } });
  return NextResponse.json(products);
}
