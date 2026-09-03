import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitalità Fisioterapia Avançada | Reabilitação, Alívio da Dor & Bem-Estar",
  description: "Clínica de fisioterapia especializada em alívio de dores na coluna, fisioterapia esportiva, RPG, pilates clínico e reabilitação postural. Atendimento 100% individualizado.",
  keywords: [
    "fisioterapia",
    "clínica de fisioterapia",
    "fisioterapia esportiva",
    "RPG",
    "pilates clínico",
    "dor na coluna",
    "osteopatia",
    "reabilitação pós operatório"
  ],
  authors: [{ name: "Clínica Vitalità" }],
  openGraph: {
    title: "Vitalità Fisioterapia Avançada | Recupere seus movimentos sem dor",
    description: "Atendimento humanizado e individualizado de fisioterapia com tecnologia de ponta e especialistas qualificados.",
    type: "website",
    locale: "pt_BR",
    siteName: "Vitalità Fisioterapia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${jakartaSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
