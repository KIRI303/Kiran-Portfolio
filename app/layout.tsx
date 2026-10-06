import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kiran — Software Engineer & Designer",
  description: "High-performance systems and thoughtful digital products, crafted for companies that care about every detail.",
  keywords: ["Software Engineer", "React", "Next.js", "TypeScript", "Rust", "Portfolio", "UI/UX"],
  authors: [{ name: "Kiran" }],
  openGraph: {
    title: "Kiran — Software Engineer & Designer",
    description: "High-performance systems and thoughtful digital products, crafted for companies that care about every detail.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
