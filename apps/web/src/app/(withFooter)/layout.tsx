import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import "react-toastify/dist/ReactToastify.css";
import AddressBar from '@/components/address/addressBar';
import SiteNavbar from '@/components/navbar/siteNavbar';
import BottomNavbar from '@/components/bottomNavbar/bottomNavbar';
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
    <main className='flex flex-col min-h-screen'>
      <AddressBar />
      <SiteNavbar />
      <section className='flex-1'>
        {children}
      </section>
      <Footer />
      <BottomNavbar />
    </main>
      
  );
}
