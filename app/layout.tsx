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

        <header className="flex flex-row sticky top-0 z-10 text-white backdrop-blur-sm backdrop-brightness-50 border-b-white border-b-2 max-md:flex-col max-md:items-center">
          <Link href="/" className="h-24">
            <Image src={logo_dark} alt="二部ソフトウェア研究部" className="px-16 py-4 h-full w-fit object-contain" />
          </Link>
          <ul className="nav h-24 ms-auto flex flex-row gap-1 max-md:h-12 *:max-md:flex-1 max-md:w-full">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </header>

        <main className="max-w-screen-sm min-h-full mx-auto bg-white bg-opacity-80 p-8 -mt-24 pt-24 -mb-60 pb-60 max-md:-mt-36 max-md:pt-36 max-md:max-w-full lg:max-w-screen-md">
          {children}
        </main>

        <footer className="h-60 flex flex-row gap-6 flex-wrap items-center justify-center backdrop-blur-sm backdrop-brightness-50 text-white">
          <Link href="/" className="flex flex-row align-baseline max-md:hidden">
            <Image src={logo_dark} alt="二部ソフトウェア研究部" className="w-64" />
          </Link>
          <a
            className="flex items-center hover:underline underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <span className="icon-mslight-document-search-outline size-4 me-2" />
            Learn
          </a>
          <a
            className="flex items-center hover:underline underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <span className="icon-mslight-select-window-2-outline me-2" />
            Examples
          </a>
          <a
            className="flex items-center hover:underline underline-offset-4"
            href="https://github.com/sofken2/sofken2"
            target="_blank"
            rel="noopener noreferrer">
            <span className="icon-uit-github-alt me-2" />
            GitHub
          </a>
          <a
            className="flex items-center hover:underline underline-offset-4"
            href="https://x.com/sofken2"
            target="_blank"
            rel="noopener noreferrer">
            <span className="icon-uit-twitter-alt me-2" />
            Twitter
          </a>
        </footer>

        {process.env.deployment == 'preview' && <label className="fixed bottom-4 right-4 w-min self-center p-2 bg-[repeating-linear-gradient(135deg,black_0px,black_20px,yellow_20px,yellow_40px)] transition-all duration-500 has-[#preview-tip:checked]:translate-x-full has-[#preview-tip:checked]:opacity-20">
          <input type="checkbox" id="preview-tip" name="隠す" className="sr-only" />
          <span className="flex flex-row items-center self-center bg-slate-600 px-2 py-1 text-white">
            <span className="icon-material-symbols-light-construction text-4xl me-2"></span>
            <span className="first-line:text-lg first-line:leading-none text-xs w-min">Preview<br />Under Construction</span>
          </span>
        </label>}

        {process.env.NODE_ENV !== 'production' && <div className="fixed inset-0 m-auto size-max text-4xl select-none">
          <span className="sm:after:content-['sm'] md:after:content-['md'] lg:after:content-['lg'] xl:after:content-['xl']" />
          <span> / </span>
          <span className="max-sm:after:content-['max-sm'] max-md:after:content-['max-md'] max-lg:after:content-['max-lg'] max-xl:after:content-['max-xl']" />
        </div>}
      </body>
    </html>
  );
}
