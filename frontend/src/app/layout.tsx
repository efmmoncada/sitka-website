import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import fetchFromPayload from '@/utils/fetchFromPayload';
import { BusinessInfo } from '../../../types/payload-types';
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sitka Renovations LLC",
  description: "Sitka Renovations LLC",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const businessInfo = await fetchFromPayload<BusinessInfo>(
    "/api/globals/business_info"
  );

  const { businessName } = businessInfo;

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <Navbar businessName={businessName} />
        {children}
        <Footer businessName={businessName} />
      </body>
    </html>
  );
}
