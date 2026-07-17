import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });

export const metadata: Metadata = {
  title: { default: "Ventura Barber | Great trims, haircuts, buzzes and more!", template: "%s | Ventura Barber" },
  description: "Fresh Since 2000. Great haircuts in Ventura. Call (805) 779-3804.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${openSans.variable} font-sans antialiased`}>
        <Header /><main>{children}</main><Footer />
      </body>
    </html>
  );
}
