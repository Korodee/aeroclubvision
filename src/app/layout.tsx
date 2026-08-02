import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aéro-club du Québec — L'aviation générale, enfin accessible",
  description:
    "Des avions entretenus commercialement, à une fraction du prix du marché. 11 appareils sur 4 bases au Québec. 100% non lucratif.",
  openGraph: {
    title: "Aéro-club du Québec",
    description:
      "L'aviation générale, enfin accessible. Dès 100 $/h dry, sans frais cachés.",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-cream">{children}</body>
    </html>
  );
}
