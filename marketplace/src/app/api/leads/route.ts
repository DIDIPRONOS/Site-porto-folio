import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, name, email, phone = null, message } = body;

    if (!productId || !name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        productId: String(productId),
        name: String(name),
        email: String(email),
        phone: phone ? String(phone) : null,
        message: String(message),
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
