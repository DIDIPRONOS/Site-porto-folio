import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YourBrand - Transform Your Business",
  description: "Streamline your workflow, boost productivity, and achieve your goals faster than ever before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
