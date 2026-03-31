import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata = {
  metadataBase: new URL("https://anestesiaquestoes.com.br"),
  title: "Anestesia Questões | Plataforma para TEA, TSA e Residência",
  description:
    "Plataforma premium de questões e simulados para anestesiologistas e residentes que buscam performance real em TEA, TSA e Residência.",
  openGraph: {
    title: "Anestesia Questões",
    description:
      "Banco de questões, simulados personalizados, filtros inteligentes e dashboard de desempenho para sua aprovação.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
