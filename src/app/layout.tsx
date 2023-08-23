import React from 'react';
import Link from 'next/link';

import Footer from './_components/Footer';
import Navbar from './_components/Navbar';

import './globals.css';

export const metadata = {
  title: 'Payload Custom Server',
  description: 'Serve Payload alongside any front-end framework.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
