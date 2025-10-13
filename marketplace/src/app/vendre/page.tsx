"use client";

import { useState } from "react";

export default function SellPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setError(null);
    try {
      const priceEuro = Number(formData.get("price"));
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.get("title"),
          description: formData.get("description"),
          priceCents: Math.round((isNaN(priceEuro) ? 0 : priceEuro) * 100),
          currency: "EUR",
          imageUrl: formData.get("imageUrl") || null,
          categorySlug: formData.get("categorySlug") || null,
          seller: {
            name: formData.get("sellerName"),
            email: formData.get("sellerEmail"),
            company: formData.get("sellerCompany") || null,
            role: formData.get("sellerRole") || "ENTREPRENEUR",
          },
          status: "PUBLISHED",
        }),
      });
      if (!res.ok) throw new Error("Erreur lors de la création du produit");
      setStatus("success");
  } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Vendre un produit</h1>
      <form action={onSubmit} className="grid gap-3">
        <input name="title" placeholder="Titre" required className="border rounded px-3 py-2" />
        <textarea name="description" placeholder="Description" required className="border rounded px-3 py-2 min-h-32" />
        <div className="grid grid-cols-2 gap-3">
          <input name="price" type="number" step="0.01" placeholder="Prix (€)" required className="border rounded px-3 py-2" />
          <input name="categorySlug" placeholder="Catégorie (slug)" className="border rounded px-3 py-2" />
        </div>
        <input name="imageUrl" placeholder="URL de l'image (optionnel)" className="border rounded px-3 py-2" />
        <hr className="my-2" />
        <div className="grid gap-2">
          <div className="font-medium">Vos informations</div>
          <input name="sellerName" placeholder="Nom" required className="border rounded px-3 py-2" />
          <input name="sellerEmail" type="email" placeholder="Email" required className="border rounded px-3 py-2" />
          <input name="sellerCompany" placeholder="Entreprise (optionnel)" className="border rounded px-3 py-2" />
          <select name="sellerRole" className="border rounded px-3 py-2">
            <option value="ENTREPRENEUR">Entrepreneur</option>
            <option value="COMMERCIAL">Commercial</option>
          </select>
        </div>
        <button disabled={status === "loading"} className="px-4 py-2 rounded bg-black text-white disabled:opacity-60" type="submit">
          {status === "loading" ? "Publication..." : "Publier"}
        </button>
        {status === "success" && (
          <p className="text-green-700 text-sm">Produit publié avec succès.</p>
        )}
        {status === "error" && (
          <p className="text-red-700 text-sm">{error}</p>
        )}
      </form>
    </div>
  );
}
