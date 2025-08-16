'use client';

import { Poppins } from 'next/font/google';
import { Shippori_Antique } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import tema from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from '../store';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

const poppins = Poppins({ //eslint-disable-line @typescript-eslint/no-unused-vars
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'normal',
  display: 'swap'
});

const shipporiAntique = Shippori_Antique({ //eslint-disable-line @typescript-eslint/no-unused-vars
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
  display: 'swap'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en">
    <head>
      <title>AL SKIN</title>
      <meta name="description" content="Loja AL SKIN"/>
    </head>
    <body>
      <ThemeProvider theme={tema}>
        <Provider store={store}>
          <GlobalStyles />
          <Header />
          <div id="root">{children}</div>
          <Footer />
        </Provider>
      </ThemeProvider>
    </body>
  </html>);
}