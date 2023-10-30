import React from 'react';
import Link from 'next/link';

import { getPayload } from '../getPayload';
import Footer from './_components/Footer';
import Navbar from './_components/Navbar';

import './globals.css';

export const metadata = {
  title: 'Payload Custom Server',
  description: 'Serve Payload alongside any front-end framework.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload();
  const { businessName } = await payload.findGlobal({
    slug: 'info',
  });

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
