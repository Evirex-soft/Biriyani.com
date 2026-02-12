import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair'
});

const lato = Lato({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: '--font-lato'
});

export const metadata: Metadata = {
  title: "Kalyana Biriyani",
  description: "Something special is taking shape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} bg-[#0a0a0a] text-[#e5e5e5] antialiased`}>
        {/* Wrap app in Smooth Scroll */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
