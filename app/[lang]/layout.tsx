import type { Metadata } from 'next';
import { Blinker, Montserrat } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

import { dir } from 'i18next';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

const blinker = Blinker({
  weight: ['300', '400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-blinker',
  adjustFontFallback: false,
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Multimodal Logistics Trade | Freight Forwarder, Trading Company',
  description:
    'Multimodal Logistics Trade is a logistics and trading company operating in Russia and CIS.',
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html
      lang={lang}
      className={`${blinker.variable} ${montserrat.variable}`}
      dir={dir(lang)}
      suppressHydrationWarning
    >
      <body>
        <Header params={{ lang }} />
        {children}
        <Footer params={{ lang }} />
      </body>
    </html>
  );
}
