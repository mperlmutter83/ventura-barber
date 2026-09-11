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
      <head>
        {/* RFM site data - pushed before GTM loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  rfm: {
    schema_version: "1.0",
    site_id: "ventura_barber",
    provider_id: "bf77ad21-a5ca-42cc-86f1-431cbb87071b",
    provider_name: "Ventura Barber",
    service_category: "barber",
    market: "ventura"
  }
});`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5SP23LHV');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${playfair.variable} ${openSans.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SP23LHV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header /><main>{children}</main><Footer />
      </body>
    </html>
  );
}
