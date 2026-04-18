import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://anestesiaquestoes.com.br"),
  title: "Anestesia Questões | Plataforma para TEA, TSA e Residência",
  description:
    "Plataforma premium de questões e simulados para anestesiologistas e residentes que buscam performance real em TEA, TSA e Residência.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Anestesia Questões | Plataforma para TEA, TSA e Residência",
    description:
      "Banco de questões, simulados personalizados, filtros inteligentes e dashboard de desempenho para sua aprovação em TEA, TSA e Residência.",
    type: "website",
    locale: "pt_BR",
    url: "https://anestesiaquestoes.com.br",
    siteName: "Anestesia Questões",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anestesia Questões — Plataforma para TEA, TSA e Residência"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Anestesia Questões | Plataforma para TEA, TSA e Residência",
    description:
      "Banco de questões, simulados e dashboard de desempenho para aprovação em TEA, TSA e Residência.",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://anestesiaquestoes.com.br"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
