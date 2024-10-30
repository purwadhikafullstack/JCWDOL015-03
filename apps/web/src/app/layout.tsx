import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import StoreProvider from '@/components/reduxStore/storeProvider';
import BottomNavbar from '@/components/bottomNavbar/bottomNavbar';
import { NextProviders } from './nextuiProvider';
import Footer from '@/components/footer/footer';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Website Belanja Kebutuhan Rumah Tangga',
  description:
    'Belanja barang-barang kebutuhan rumah hanya di NextGrocery | Banyak Promo spesial bikin belanja makin hemat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <NextProviders>
          <StoreProvider>
            <Header />
            {children}
            <BottomNavbar />
          </StoreProvider>
        </NextProviders>
      </body>
    </html>
  );
}
