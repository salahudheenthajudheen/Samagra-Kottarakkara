import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { LanguageProvider } from "./context/LanguageContext";
// Remove Footer import since the component doesn't exist yet

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samagra Kottarakkara",
  description: "Official website of Samagra Kottarakkara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ml">
      <body className={inter.className}>
        <LanguageProvider>
          <NavBar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
