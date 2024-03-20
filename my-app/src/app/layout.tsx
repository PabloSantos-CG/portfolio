import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PS-Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600"
    >
      <body className={`${inter.className} bg-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
