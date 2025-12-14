import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';
import { CartProvider } from '@/context/CartContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EcoSpark – Nachhaltige Mini-Produkte & Eco Gadgets',
  description: 'Entdecke nachhaltige Mini-Produkte, Zero-Waste Essentials & grüne Geschenkideen. Kleine Dinge, großer Impact.',
  keywords: ['nachhaltig', 'zero waste', 'eco', 'umweltfreundlich', 'plastikfrei'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <CartProvider>
          <Layout>{children}</Layout>
        </CartProvider>
      </body>
    </html>
  );
}




