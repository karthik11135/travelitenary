import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Providers from '@/lib/Providers';
import SidebarLayout from '@/ui/SidebarLayout';

const roboto = Roboto({
  weight: ['400', '100', '300', '500', '700'],
  subsets: ['greek'],
});

export const metadata: Metadata = {
  title: 'Fly like a bird',
  description: 'Travel to your favorite destination',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body
        className={`${roboto.className} bg-supreme overflow-auto min-h-screen antialiased`}
      >
        <Providers>
          <Navbar />
          <SidebarLayout>{children}</SidebarLayout>
        </Providers>
      </body>
    </html>
  );
}
