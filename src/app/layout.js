import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata = {
  title: 'DaaS Tech',
  description: 'Empowering Your Digital Dreams',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
<script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="text-white">
        <SpeedInsights/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
