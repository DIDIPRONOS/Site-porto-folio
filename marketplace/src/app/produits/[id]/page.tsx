import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ContactForm from "@/components/ContactForm";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { category: true, seller: true },
  });
  if (!product) return notFound();

  const price = (product.priceCents / 100).toLocaleString("fr-FR", {
    style: "currency",
    currency: product.currency,
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={900}
            height={700}
            className="w-full h-auto rounded"
          />
        )}
        <div className="grid gap-3">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <div className="text-lg">{price}</div>
          {product.category && (
            <div className="text-sm text-gray-600">Catégorie: {product.category.name}</div>
          )}
          <p className="text-gray-700 whitespace-pre-wrap">{product.description}</p>
          <div className="text-sm text-gray-600">Vendu par: {product.seller.name}</div>
        </div>
      </div>
      <ContactForm productId={product.id} />
    </div>
  );
}
