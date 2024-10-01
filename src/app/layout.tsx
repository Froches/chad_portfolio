import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedPage from "@/components/AnimatedPages";

const nunito = Nunito({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Temidayo Adekunle",
  description: "Portfolio website for designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white ${nunito.className} antialiased`}>
        <Navbar />
        <AnimatedPage>{children}</AnimatedPage>
        <Footer />
      </body>
    </html>
  );
}
