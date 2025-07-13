import BootstrapClient from '@/app/ui/BootstrapClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/ui/global.css'

import Header from './ui/Header/Header';
import Footer from './ui/Footer/Footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <html lang="en">

      <head>
        <meta name="viewport" content="width=device-width, maximum-scale=1.0,  user-scalable=0" />
      </head>

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
