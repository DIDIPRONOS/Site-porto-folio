import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid gap-8">
      <div className="grid gap-3">
        <h1 className="text-3xl font-semibold">Vendez et faites découvrir vos produits</h1>
        <p className="text-gray-600">
          Marketplace pour entrepreneurs et commerciaux. Mettez en avant vos produits,
          recevez des demandes et développez vos ventes.
        </p>
      </div>

      <div className="flex gap-3">
        <Link href="/produits" className="px-4 py-2 rounded-md bg-black text-white">
          Voir les produits
        </Link>
        <Link href="/vendre" className="px-4 py-2 rounded-md border">
          Vendre un produit
        </Link>
      </div>
    </section>
  );
}
