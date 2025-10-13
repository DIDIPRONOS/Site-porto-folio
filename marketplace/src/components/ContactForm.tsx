"use client";

import { useState } from "react";

export default function ContactForm({ productId }: { productId: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi de la demande");
      setStatus("success");
  } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
      setStatus("error");
    }
  }

  return (
    <form
      action={onSubmit}
      className="grid gap-3 p-4 border rounded-lg"
    >
      <h3 className="font-medium">Contacter le vendeur</h3>
      <input name="name" placeholder="Votre nom" required className="border rounded px-3 py-2" />
      <input name="email" type="email" placeholder="Votre email" required className="border rounded px-3 py-2" />
      <input name="phone" placeholder="Téléphone (facultatif)" className="border rounded px-3 py-2" />
      <textarea name="message" placeholder="Votre message" required className="border rounded px-3 py-2 min-h-24" />
      <button
        disabled={status === "loading"}
        className="px-4 py-2 rounded bg-black text-white disabled:opacity-60"
        type="submit"
      >
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </button>
      {status === "success" && (
        <p className="text-green-700 text-sm">Votre demande a été envoyée.</p>
      )}
      {status === "error" && (
        <p className="text-red-700 text-sm">{error}</p>
      )}
    </form>
  );
}
