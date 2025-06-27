import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import HeaderFooterWrapper from './components/HeaderFooterWrapper'; // new client component
import './globals.css';

import '@/app/custom-bootstrap.scss';
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

        <meta name="theme-color" content="#181622" />

      
      </head>
      <body className="text-white">
        <HeaderFooterWrapper>
        <SpeedInsights/>
        
        {children}
        </HeaderFooterWrapper>
      </body>
    </html>
  );
}
