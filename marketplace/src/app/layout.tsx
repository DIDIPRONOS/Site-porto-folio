import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketplace Entrepreneurs",
  description:
    "Plateforme pour entrepreneurs et commerciaux afin de promouvoir leurs produits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full border-b border-black/10 dark:border-white/10">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="font-semibold text-lg">Marketplace</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/produits" className="hover:underline">Produits</Link>
              <Link href="/vendre" className="hover:underline">Vendre</Link>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-120px)]">{children}</main>
        <footer className="w-full border-t border-black/10 dark:border-white/10">
          <div className="max-w-6xl mx-auto p-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Marketplace Entrepreneurs
          </div>
        </footer>
      </body>
    </html>
  );
}
