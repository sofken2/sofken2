import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import plugin from 'tailwindcss/plugin';
import typographyConfig from './typography.config';

const preview = process.env.deployment === 'preview';
const development = process.env.NODE_ENV !== 'production';

const config = {
  ...((development || preview) && {
    darkMode: ['variant', [
      '@media (prefer-color-scheme: dark) { & }',
      '@container style(--tw-color-scheme: dark) { & }',
    ]],
  }),
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    typographyPlugin,
    iconsPlugin({
      prefix: 'icon',
      collections: getIconCollections(['mdi-light', 'material-symbols-light', 'uit']),
      collectionNamesAlias: {
        'material-symbols-light': 'mslight',
      },
    }),
    plugin(({ addVariant }) => {
      addVariant('hover', [
        '@media (hover: hover) { &:is(:hover, :focus-visible) }',
        '@media (hover: none) { &:is(:active, :focus-visible) }',
      ]);
      addVariant('group-hover', [
        '@media (hover: hover) { .group:is(:hover, :focus-visible) & }',
        '@media (hover: none) { .group:is(:active, :focus-visible) & }',
      ]);
      addVariant('hocus', [
        '@media (hover: hover) { &:is(:hover, :focus-visible) }',
        '@media (hover: none) { &:focus-visible }',
      ]);
      addVariant('group-hocus', [
        '@media (hover: hover) { .group:is(:hover, :focus-visible) & }',
        '@media (hover: none) { .group:focus-visible & }',
      ]);
      addVariant('device-hover', '@media (hover: hover)');
      addVariant('device-touch', '@media (hover: none)');
    }),
    plugin(({ addVariant, addBase, addUtilities }) => {
      addBase({
        '@property --scroll-pos': {
          'syntax': '"<number>"',
          'inherits': 'true',
          'initial-value': '0',
        },
        '@property --scroll-pos-delayed': {
          'syntax': '"<number>"',
          'inherits': 'true',
          'initial-value': '0',
        },
        '@property --scroll-dir': {
          'syntax': '"<number>"',
          'inherits': 'true',
          'initial-value': '0',
        },
        '@property --scrolling-up': {
          'syntax': '"<integer>"',
          'inherits': 'true',
          'initial-value': '0',
        },
        '@property --scrolling-down': {
          'syntax': '"<integer>"',
          'inherits': 'true',
          'initial-value': '0',
        },
        '@keyframes scroll-pos': {
          'to': {
            '--scroll-pos': '1',
            '--scroll-pos-delayed': '1',
          },
        },
      });
      addUtilities({
        '.scroll-container': {
          'animation': 'scroll-pos linear both',
          'animation-timeline': 'scroll(root)',
          '& > *': {
            'transition': '--scroll-pos-delayed 0.15s linear',
            '--scroll-vel': 'calc(var(--scroll-pos) - var(--scroll-pos-delayed))',
            // '--scroll-speed': 'abs(var(--scroll-vel))',
            // '--scroll-dir': 'sign(var(--scroll-vel))',
            '--scroll-speed': 'max(var(--scroll-vel), -1 * var(--scroll-vel))',
            '--scroll-dir': 'calc(round(up, var(--scroll-vel)) + round(down, var(--scroll-vel)))',
            '--scrolling-up': 'round(up, -1 * var(--scroll-vel))',
            '--scrolling-down': 'round(up, var(--scroll-vel))',
          },
        },
      });

      addVariant('scrolling', '@container not style(--scroll-dir: 0.0)');
      addVariant('scrolling-up', '@container style(--scroll-dir: -1.0)');
      addVariant('scrolling-down', '@container style(--scroll-dir: +1.0)');
      addVariant('not-scrolling', '@container style(--scroll-dir: 0.0)');
      addVariant('at-page-top', '@container style(--scroll-pos: 0.0)');
      addVariant('not-at-page-top', '@container not style(--scroll-pos: 0.0)');
      addVariant('at-page-bottom', '@container style(--scroll-pos: 1.0)');
      addVariant('not-at-page-bottom', '@container not style(--scroll-pos: 1.0)');
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-source-sans)', 'var(--font-mplus-1)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      typography: typographyConfig,
    },
  },
} satisfies Config;
export default config;
