import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { M_PLUS_1p } from 'next/font/google';

import { logo_dark } from './res/logo';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const mplus = M_PLUS_1p({
  variable: '--font-mplus-1p',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-24 flex flex-col ${geistSans.variable} ${geistMono.variable} ${mplus.variable} font-sans font-light antialiased
        bg-[url('https://picsum.photos/seed/eternalcore/1920/1200?grayscale')] bg-cover min-h-screen`}>
        <header className="flex flex-row items-stretch text-white backdrop-blur-sm backdrop-brightness-50 sticky top-0 border-b-white border-b-2 z-10">
          <Link href="/" className="flex flex-row align-baseline">
            <Image src={logo_dark} alt="二部ソフトウェア研究部" className="px-16 py-4 w-auto h-24" />
          </Link>
          {true && <span className="self-center p-2 bg-[repeating-linear-gradient(135deg,black_0px,black_20px,yellow_20px,yellow_40px)]">
            <span className="flex flex-row items-center self-center bg-white px-1 text-black">
              <span className="icon-material-symbols-light-construction text-4xl"></span>
              <span>Under Construction</span>
            </span>
          </span>}
          <ul className="nav ms-auto flex flex-row items-stretch gap-1">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        <main className="max-w-screen-sm w-full mx-auto bg-white bg-opacity-80 p-8 -mt-24 pt-32">
          {children}
        </main>
        <footer className="flex flex-row gap-6 flex-wrap items-center justify-center min-h-40 backdrop-blur-sm backdrop-brightness-50">
          <Link href="/" className="flex flex-row align-baseline">
            <Image src={logo_dark} alt="二部ソフトウェア研究部" className="w-80" />
          </Link>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16} />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16} />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16} />
            Go to nextjs.org →
          </a>
        </footer>
      </body>
    </html>
  );
}
