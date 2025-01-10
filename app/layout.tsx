import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { M_PLUS_1p } from 'next/font/google';

import { logo_dark } from './res/logo';

const mplus = M_PLUS_1p({
  variable: '--font-mplus-1p',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: '2部ソフ研',
  description: '東京電機大学2部ソフ研のホームページです。',
  keywords: ['2部ソフ研', 'ソフトウェア研究部', '東京電機大学', 'TDU'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`min-h-screen ${mplus.variable} font-sans font-light antialiased bg-[url('https://picsum.photos/seed/eternalcore/1920/1200?grayscale')] bg-cover`}>

        <header className="h-24 flex flex-row sticky top-0 z-10 text-white backdrop-blur-sm backdrop-brightness-50 border-b-white border-b-2">
          <Link href="/" className="h-full">
            <Image src={logo_dark} alt="二部ソフトウェア研究部" className="px-16 py-4 h-full w-fit object-contain" />
          </Link>
          <ul className="nav h-full ms-auto flex flex-row gap-1">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </header>

        <main className="max-w-screen-sm min-h-full mx-auto bg-white bg-opacity-80 p-8 -mt-24 pt-24 -mb-60 pb-60">
          {children}
        </main>

        <footer className="h-60 flex flex-row gap-6 flex-wrap items-center justify-center backdrop-blur-sm backdrop-brightness-50 text-white">
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

        {process.env.deployment == 'preview' && <label className="fixed bottom-4 right-4 w-min self-center p-2 bg-[repeating-linear-gradient(135deg,black_0px,black_20px,yellow_20px,yellow_40px)] transition-all duration-500 has-[#preview-tip:checked]:translate-x-full has-[#preview-tip:checked]:opacity-20">
          <input type="checkbox" id="preview-tip" name="隠す" className="sr-only" />
          <span className="flex flex-row items-center self-center bg-slate-600 px-2 py-1 text-white">
            <span className="icon-material-symbols-light-construction text-4xl me-2"></span>
            <span className="first-line:text-lg first-line:leading-none text-xs w-min">Preview<br />Under Construction</span>
          </span>
        </label>}
      </body>
    </html>
  );
}
