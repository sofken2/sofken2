import { Noto_Sans_JP } from 'next/font/google';
import { clsx } from '../utils';

// M_PLUS_1p => 1とほぼ同じでバリアブル非対応。Kazesawaはこちら？
// M_PLUS_1
// Source_Sans_3
// Noto_Sans_JP
// Inter => バリアブルで軸も多く確かに読みやすい
// 游ゴシック

// 游明朝
// Source_Serif_4
// Noto_Serif_JP

// export const m_plus_1 = M_PLUS_1({
//   variable: '--font-mplus-1',
//   preload: false,
//   display: 'swap',
// });

// export const source_sans = Source_Sans_3({
//   variable: '--font-source-sans',
//   preload: false,
//   display: 'swap',
// });
// export const source_serif = Source_Serif_4({
//   variable: '--font-source-serif',
//   preload: false,
//   display: 'swap',
// });

export const noto_sans = Noto_Sans_JP({
  variable: '--font-noto-sans',
  preload: false,
});
// export const noto_serif = Noto_Serif_JP({
//   variable: '--font-noto-serif',
//   preload: false,
//   display: 'swap',
// });

// export const inter = Inter({
//   variable: '--font-inter',
//   preload: false,
//   display: 'swap',
// });

export const font_variables = clsx([
  // m_plus_1,
  // source_sans,
  noto_sans,
  // noto_serif,
].map((it) => it.variable));
