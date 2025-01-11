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

const preview = process.env.deployment === 'preview';
const development = process.env.NODE_ENV !== 'production';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`scroll-container${(development || preview) ? ' has-[#theme-dark:checked]:[color-scheme:dark] has-[#theme-dark:checked]:[--tw-color-scheme:dark] has-[#theme-light:checked]:[color-scheme:light] has-[#theme-light:checked]:[--tw-color-scheme:light]' : ''}`}>
      <body className={`min-h-screen ${mplus.variable} font-sans font-light antialiased bg-[url('https://picsum.photos/seed/eternalcore/1920/1200?grayscale')] bg-cover`}>

        <header className="flex flex-row fixed inset-x-0 top-0 z-10 text-white backdrop-blur-sm backdrop-brightness-50 border-b-white border-b-2 max-md:flex-col max-md:items-center max-md:not-at-page-top:-translate-y-24 transition-all delay-200 duration-500">
          <Link href="/" className="h-24 md:not-at-page-top:h-16 transition-all delay-200 duration-500">
            <Image src={logo_dark} alt="二部ソフトウェア研究部" className="px-16 py-4 h-full w-fit object-contain md:not-at-page-top:py-2 md:not-at-page-top:px-24 transition-all delay-200 duration-500" />
          </Link>
          <ul className="nav h-24 ms-auto flex flex-row gap-1 max-md:h-12 *:max-md:flex-1 max-md:w-full border-white max-md:border-t-[1px] not-at-page-top:h-16 transition-all  delay-200 duration-500">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </header>

        <main className="max-w-screen-sm min-h-full mx-auto bg-white bg-opacity-80 p-8 pt-24 -mb-60 pb-60 max-md:pt-36 max-md:max-w-full lg:max-w-screen-md dark:bg-slate-800">
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

        {preview && <label className="fixed bottom-4 right-4 w-min self-center p-2 bg-[repeating-linear-gradient(135deg,black_0px,black_20px,yellow_20px,yellow_40px)] transition-all duration-500 has-[#preview-tip:checked]:translate-x-full has-[#preview-tip:checked]:opacity-20 cursor-pointer">
          <input type="checkbox" id="preview-tip" name="hide-preview-tip" className="sr-only" />
          <span className="flex flex-row items-center self-center bg-slate-600 px-2 py-1 text-white">
            <span className="icon-material-symbols-light-construction text-4xl me-2"></span>
            <span className="first-line:text-lg first-line:leading-none text-xs w-min">Preview<br />Under Construction</span>
          </span>
        </label>}

        {false && <div className="fixed inset-0 m-auto size-max text-4xl select-none">
          <span className="sm:after:content-['sm'] md:after:content-['md'] lg:after:content-['lg'] xl:after:content-['xl']" />
          <span> / </span>
          <span className="max-sm:after:content-['max-sm'] max-md:after:content-['max-md'] max-lg:after:content-['max-lg'] max-xl:after:content-['max-xl']" />
        </div>}

        {(development || preview) && <div className="fixed inset-y-0 right-4 m-auto size-10 p-1 bg-black text-white bg-opacity-75 [&_input]:sr-only group/theme">
          <label className="sr-only group-has-[#theme-light:checked]/theme:not-sr-only cursor-pointer">
            <input type="radio" name="color-scheme" id="theme-system" defaultChecked />
            <span className="size-8 icon-mslight-brightness-auto-outline"></span>
          </label>
          <label className="sr-only group-has-[#theme-system:checked]/theme:not-sr-only cursor-pointer">
            <input type="radio" name="color-scheme" id="theme-dark" />
            <span className="size-8 icon-mslight-light-mode-outline"></span>
          </label>
          <label className="sr-only group-has-[#theme-dark:checked]/theme:not-sr-only cursor-pointer">
            <input type="radio" name="color-scheme" id="theme-light" />
            <span className="size-8 icon-mslight-dark-mode-outline"></span>
          </label>
        </div>}

        {(development || preview) && <label className="fixed inset-y-0 left-4 m-auto size-max min-w-40 p-1 bg-black text-white bg-opacity-75 transition-all duration-500 has-[#scroll-tip:checked]:-translate-x-full has-[#scroll-tip:checked]:opacity-20 has-[#scroll-tip:checked]:pe-4 cursor-pointer">
          <input type="checkbox" id="scroll-tip" name="hide-scroll-tip" className="sr-only" defaultChecked />

          <div className="w-full relative after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:bg-white after:origin-left after:scale-x-[--scroll-pos]">scroll-position</div>
          <div className="w-full relative after:absolute after:right-0 after:left-1/2 after:bottom-0 after:h-[1px] after:bg-white after:origin-left after:scale-x-[--scroll-vel]">scroll-velocity</div>
          <div className="not-scrolling:bg-white not-scrolling:text-black">state: stopped</div>
          <div className="scrolling:bg-white scrolling:text-black">state: scrolling</div>
          <div className="scrolling-up:bg-white scrolling-up:text-black">direction: up</div>
          <div className="scrolling-down:bg-white scrolling-down:text-black">direction:-down</div>
          <div className="at-page-top:bg-white at-page-top:text-black">scroll pos: top</div>
          <div className="at-page-bottom:bg-white at-page-bottom:text-black">scroll pos: bottom</div>
        </label>}
      </body>
    </html>
  );
}
