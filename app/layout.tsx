import BootstrapClient from '@/app/ui/BootstrapClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/ui/global.css'
import Header from './ui/Header/Header';
import Footer from './ui/Footer/Footer';

import { Metadata } from 'next';



export const metadata: Metadata = {
  generator: 'Next.js',
  keywords: ['радон', 'сензор', 'датчик', 'radon', 'качество', 'въздух', 'Airthings'],
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <html lang="en">

      <body>


        <div id='root' style={{ maxWidth: '2000px', padding: '0' }}>

          <Header />

          <main>

            {children}

          </main>

          <Footer />

        </div>


      </body>

      <BootstrapClient />

    </html>
  );
}
