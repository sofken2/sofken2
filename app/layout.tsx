import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { M_PLUS_1p, M_PLUS_1, Source_Sans_3 } from 'next/font/google';

import { logo_dark } from './res/logo';
import { clsx } from './utils';

const mplusp = M_PLUS_1p({
  variable: '--font-mplus-1p',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800', '900'],
});
const mplus = M_PLUS_1({
  variable: '--font-mplus-1',
  subsets: ['latin'],
});
const source = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
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
    <html lang="ja" className={clsx(`scroll-container`, (development || preview) && 'has-[#theme-dark:checked]:[color-scheme:dark] has-[#theme-dark:checked]:[--tw-color-scheme:dark] has-[#theme-light:checked]:[color-scheme:light] has-[#theme-light:checked]:[--tw-color-scheme:light]')}>
      <body className={`min-h-screen bg-[url('https://picsum.photos/seed/eternalcore/1920/1200?grayscale')] bg-cover font-sans font-light antialiased ${mplus.variable} ${mplusp.variable} ${source.variable}`}>

        <header className="flex flex-row fixed inset-x-0 top-0 z-10 text-white backdrop-blur-sm backdrop-brightness-50 border-b-white border-b-2 max-md:flex-col max-md:items-center max-md:not-at-page-top:-translate-y-24 transition-all delay-200 duration-500">
          <Link href="/" className="h-24 md:not-at-page-top:h-16 transition-all delay-200 duration-500">
            <Image src={logo_dark} alt="二部ソフトウェア研究部" className="px-16 py-4 h-full w-fit object-contain md:not-at-page-top:py-2 md:not-at-page-top:px-24 transition-all delay-200 duration-500" />
          </Link>
          <ul className="h-24 ms-auto flex flex-row gap-1 max-md:h-12 *:max-md:flex-1 max-md:w-full border-white max-md:border-t-[1px] not-at-page-top:h-16 transition-all delay-200 duration-500">
            {([
              ['/about', 'About Us'],
              ['/news', 'News'],
              ['/blog', 'Blog'],
              ['/contact', 'Contact'],
            ] as const).map(([href, name]) => (<li key={href}>
              <Link href={href} className="block min-w-max h-full px-8 text-center content-center max-md:px-0 max-lg:px-4 text-white hocus:text-black transition-all duration-500 ease-in-out [box-shadow:inset_0_var(--sw)_white] [--sw:-2px] hocus:[--sw:calc(-1*theme('spacing.24'))] max-md:hocus:[--sw:calc(-1*theme('spacing.12'))] device-touch:[--sw:-4px] device-touch:active:[--sw:-1px] device-touch:duration-200">{name}</Link>
            </li>))}
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

        {(preview) && <label className="fixed bottom-4 right-4 w-max self-center p-2 bg-[repeating-linear-gradient(135deg,black_0px,black_20px,yellow_20px,yellow_40px)] transition-all duration-500 has-[#preview-tip:checked]:translate-x-full has-[#preview-tip:checked]:opacity-20 cursor-pointer">
          <input type="checkbox" id="preview-tip" name="hide-preview-tip" className="absolute inset-0 appearance-none cursor-pointer" />
          <div className="flex flex-row items-center self-center bg-slate-600 px-2 py-1 text-white">
            <span className="icon-mslight-construction text-4xl me-2"></span>
            <div>
              <div className="text-lg leading-none">Preview</div>
              <div className="text-xs">Under Construction</div>
            </div>
          </div>
        </label>}

        {(false) && <div className="fixed inset-0 m-auto size-max text-4xl select-none">
          <span className="sm:after:content-['sm'] md:after:content-['md'] lg:after:content-['lg'] xl:after:content-['xl']" />
          <span> / </span>
          <span className="max-sm:after:content-['max-sm'] max-md:after:content-['max-md'] max-lg:after:content-['max-lg'] max-xl:after:content-['max-xl']" />
        </div>}

        {(development || preview) && <div className="flex flex-col fixed inset-y-0 right-4 m-auto size-min p-1 bg-black/80 text-white rounded-full -space-y-1 before:absolute before:inset-x-0 before:size-8 before:m-1 before:rounded-full before:bg-white/20 has-[#theme-light:checked]:before:top-0 has-[#theme-system:checked]:before:top-[1.75rem] has-[#theme-dark:checked]:before:top-[3.5rem] before:transition-all">
          {([
            ['theme-light', 'icon-mslight-light-mode-outline', 'Light Mode'],
            ['theme-system', 'icon-mslight-display-settings-outline', 'No Override', true],
            ['theme-dark', 'icon-mslight-dark-mode-outline', 'Dark Mode'],
          ] as const).map(([name, icon, desc, checked]) => (
            <label key={name} className="size-8 p-1.5 rounded-full cursor-pointer relative group">
              <input type="radio" name="color-scheme" className="absolute inset-0 rounded-full appearance-none" id={name} defaultChecked={checked} />
              <span className="absolute inset-y-0 -left-2 m-auto px-2 size-max -translate-x-full invisible group-hover:visible bg-black/80 rounded-full text-sm device-touch:group-active:delay-0 device-touch:group-has-[:checked]:delay-1000 select-none">{desc}</span>
              <span className={`size-full ${icon} group-hover:scale-125 transition-all`} />
            </label>
          ))}
        </div>}

        {(development || preview) && <label className="flex flex-col gap-1 fixed inset-y-0 left-4 m-auto size-max min-w-40 p-1 bg-black/80 text-white transition-all duration-500 has-[#scroll-tip:checked]:-translate-x-full has-[#scroll-tip:checked]:opacity-20 has-[#scroll-tip:checked]:pe-4 cursor-pointer">
          <input type="checkbox" id="scroll-tip" name="hide-scroll-tip" className="absolute inset-0 appearance-none cursor-pointer" defaultChecked />

          <div className="w-full relative after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-current after:origin-left after:scale-x-[--scroll-pos]">scroll-position</div>
          <div className="w-full relative after:absolute after:right-0 after:left-1/2 after:bottom-0 after:h-px after:bg-current after:origin-left after:scale-x-[--scroll-vel]">scroll-velocity</div>
          <div className="scrolling-up:after:content-['up'] scrolling-down:after:content-['down'] not-scrolling:after:content-['stopped'] scrolling:text-black scrolling:bg-white">scroll dir: </div>
          <div className="after:content-['middle'] at-page-top:after:content-['top'] at-page-top:text-black at-page-top:bg-white at-page-bottom:after:content-['bottom'] at-page-bottom:text-black at-page-bottom:bg-white">scroll pos: </div>
        </label>}
      </body>
    </html>
  );
}
