import type { Metadata } from "next";
import { Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";
import Loader from "@/components/Loader";
import "@/styles/globals.scss";

const title = Cinzel_Decorative({
  subsets: ["latin", "latin-ext"],
  variable: "--font-title",
  weight: ["400", "700", "900"],
  display: "swap",
});

const body = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RITUA — Balie i sauny klasy premium",
  description:
    "Balie i sauny projektowane na wymiar z najwyższą dokładnością. Rytuał dopracowany do milimetra. Realizacje premium w Polsce i na Słowacji.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${title.variable} ${body.variable}`}>
        <Loader />
        {children}
      </body>
    </html>
  );
}
