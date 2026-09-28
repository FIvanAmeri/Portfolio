import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/motion/fx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Ivan Ameri - Desarrollador Full Stack", template: "%s | Ivan Ameri" },
  description: "Portfolio de Ivan Ameri, Desarrollador Web Full Stack (Next.js, TypeScript, Node.js). Proyectos reales, testimonios y contacto.",
  authors: [{ name: "Ivan Ameri" }],
  openGraph: { type: "website", locale: "es_ES", siteName: "Portfolio de Ivan Ameri", title: "Ivan Ameri - Desarrollador Full Stack", description: "Proyectos reales con Next.js y TypeScript." },
  twitter: { card: "summary_large_image", title: "Ivan Ameri - Desarrollador Full Stack", description: "Portfolio: proyectos, trayectoria y contacto." },
};

export const viewport = { themeColor: "#09090b" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
