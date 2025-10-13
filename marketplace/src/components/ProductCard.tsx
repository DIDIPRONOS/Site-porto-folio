import Image from "next/image";
import Link from "next/link";

export type ProductListItem = {
  id: string;
  title: string;
  description: string;
  priceCents: number;
  currency: string;
  imageUrl: string | null;
};

export default function ProductCard({ product }: { product: ProductListItem }) {
  const price = (product.priceCents / 100).toLocaleString("fr-FR", {
    style: "currency",
    currency: product.currency,
  });

  return (
    <div className="border rounded-lg overflow-hidden flex flex-col">
      {product.imageUrl && (
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={800}
          height={600}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 grid gap-2">
        <Link href={`/produits/${product.id}`} className="font-medium hover:underline">
          {product.title}
        </Link>
        <p className="text-sm text-gray-600">
          {product.description.length > 120
            ? product.description.slice(0, 117) + "..."
            : product.description}
        </p>
        <div className="mt-1 text-sm text-gray-800">{price}</div>
      </div>
    </div>
  );
}
