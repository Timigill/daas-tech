import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'DaaS Tech',
  description: 'Empowering Your Digital Dreams',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
