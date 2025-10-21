import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
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
  title: "Portfolio",
  description:
    "Salut ! Moi c'est RwNath, bienvenue sur portfolio où je partage mes projets.",
};

export const viewport: Viewport = { themeColor: "#008020" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased dark",
        )}
      >
        {children}
      </body>
    </html>
  );
}
