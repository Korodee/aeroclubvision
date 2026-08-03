import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { themeInitScript } from "@/lib/themeScript";
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
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aeroclubvision.vercel.app",
  ),
  title: "Aéro-club du Québec — L'aviation générale, enfin accessible",
  description:
    "Des avions entretenus commercialement, à une fraction du prix du marché. 11 appareils sur 4 bases au Québec. 100% non lucratif.",
  openGraph: {
    title: "Aéro-club du Québec",
    description:
      "L'aviation générale, enfin accessible. Dès 100 $/h dry, sans frais cachés.",
    locale: "fr_CA",
    type: "website",
    images: [
      {
        url: "/thumbnail.png",
        width: 2880,
        height: 1616,
        alt: "Aéro-club du Québec — L'aviation générale, enfin accessible",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aéro-club du Québec",
    description:
      "L'aviation générale, enfin accessible. Dès 100 $/h dry, sans frais cachés.",
    images: ["/thumbnail.png"],
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
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-ink font-sans text-cream">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
