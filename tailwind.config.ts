import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import { type ResolvableTo } from 'tailwindcss/types/config';
import { type CSSProperties } from 'react';

const key = (w: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900') => {
  const [name] = Object.entries(defaultTheme.fontWeight ?? {}).find(([, value]) => value === w) ?? ['normal'];
  return `fontWeight.${name}`;
};

const config = {
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
      collections: getIconCollections(['mdi-light', 'material-symbols-light']),
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mplus-1p)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      typography: (({ colors, theme }) => ({
        'theme-override': {
          css: {
            '--tw-prose-links': colors.blue[600],
            '--tw-prose-visited-links': colors.violet[600],
            '--tw-prose-invert-links': colors.blue[500],
            '--tw-prose-invert-visited-links': colors.violet[500],

            '--tw-prose-body': colors.slate[800],
            '--tw-prose-quote-borders': colors.slate[400],
            '--tw-prose-hr': colors.slate[400],
            '--tw-prose-bullets': colors.slate[500],

            'ol:not([type])': { listStyleType: 'decimal' },
            ':is(ul, ol) ol:not([type])': { listStyleType: 'lower-roman' },
            ':is(ul, ol) :is(ul, ol) ol:not([type])': { listStyleType: 'lower-alpha' },
            ':is(ul, ol) :is(ul, ol) :is(ul, ol) ol:not([type])': { listStyleType: 'decimal' },
            'blockquote': {
              fontStyle: 'inherit',
              quotes: 'none',
            },
            // 'code:not(pre code)': {},
            'code:not(pre code)::before': {
              content: '"`"',
            },
            'code:not(pre code)::after': {
              content: '"`"',
            },
          },
        },
        'invert': {
          css: {
            '--tw-prose-visited-links': 'var(--tw-prose-invert-visited-links)',
          },
        },
        'relative-weight': {
          css: {
            'a': { fontWeight: 'inherit' },
            'strong': { fontWeight: 'bolder' },
            'ol > li::marker': { fontWeight: 'inherit' },
            'dt': { fontWeight: 'bolder' },
            'blockquote': { fontWeight: 'inherit' },
            'h1': { fontWeight: 'bolder' },
            'h2': { fontWeight: 'bolder' },
            'h3': { fontWeight: 'bolder' },
            'h4': { fontWeight: 'bolder' },
            'kbd': { fontWeight: 'bolder' },
            'code': { fontWeight: 'inherit' },
            'pre': { fontWeight: 'inherit' },
            'thead th': { fontWeight: 'bolder' },
          },
        },
        'themed-weight': {
          css: {
            'a': { fontWeight: theme(key('500'), 'inherit') },
            'strong': { fontWeight: theme(key('600'), 'inherit') },
            'ol > li::marker': { fontWeight: theme(key('400'), 'inherit') },
            'dt': { fontWeight: theme(key('600'), 'inherit') },
            'blockquote': { fontWeight: theme(key('500'), 'inherit') },
            'h1': { fontWeight: theme(key('800'), 'inherit') },
            'h1 strong': { fontWeight: theme(key('900'), 'inherit') },
            'h2': { fontWeight: theme(key('700'), 'inherit') },
            'h2 strong': { fontWeight: theme(key('800'), 'inherit') },
            'h3': { fontWeight: theme(key('600'), 'inherit') },
            'h3 strong': { fontWeight: theme(key('700'), 'inherit') },
            'h4': { fontWeight: theme(key('600'), 'inherit') },
            'h4 strong': { fontWeight: theme(key('700'), 'inherit') },
            'kbd': { fontWeight: theme(key('500'), 'inherit') },
            'code': { fontWeight: theme(key('600'), 'inherit') },
            'pre': { fontWeight: theme(key('400'), 'inherit') },
            'thead th': { fontWeight: theme(key('600'), 'inherit') },
          },
        },
        'DEFAULT': {
          css: {
            'a': {
              color: `var(--tw-prose-links)`,
            },
            'a:hover': {
              textDecoration: 'none',
            },
            'a:visited': {
              color: `var(--tw-prose-visited-links, --tw-prose-links)`,
            },
          },
        },
      })) satisfies ResolvableTo<TypographyConfig>,
    },
  },
} satisfies Config;
export default config;

type TypographyConfig = Record<'DEFAULT' | string, { css: Partial<TypographyVariables> & Record<string, CSSProperties> }>;

interface TypographyVariables extends CSSProperties {
  '--tw-prose-body': string | number;
  '--tw-prose-headings': string | number;
  '--tw-prose-lead': string | number;
  '--tw-prose-links': string | number;
  '--tw-prose-bold': string | number;
  '--tw-prose-counters': string | number;
  '--tw-prose-bullets': string | number;
  '--tw-prose-hr': string | number;
  '--tw-prose-quotes': string | number;
  '--tw-prose-quote-borders': string | number;
  '--tw-prose-captions': string | number;
  '--tw-prose-kbd': string | number;
  '--tw-prose-kbd-shadows': string | number;
  '--tw-prose-code': string | number;
  '--tw-prose-pre-code': string | number;
  '--tw-prose-pre-bg': string | number;
  '--tw-prose-th-borders': string | number;
  '--tw-prose-td-borders': string | number;
  '--tw-prose-invert-body': string | number;
  '--tw-prose-invert-headings': string | number;
  '--tw-prose-invert-lead': string | number;
  '--tw-prose-invert-links': string | number;
  '--tw-prose-invert-bold': string | number;
  '--tw-prose-invert-counters': string | number;
  '--tw-prose-invert-bullets': string | number;
  '--tw-prose-invert-hr': string | number;
  '--tw-prose-invert-quotes': string | number;
  '--tw-prose-invert-quote-borders': string | number;
  '--tw-prose-invert-captions': string | number;
  '--tw-prose-invert-kbd': string | number;
  '--tw-prose-invert-kbd-shadows': string | number;
  '--tw-prose-invert-code': string | number;
  '--tw-prose-invert-pre-code': string | number;
  '--tw-prose-invert-pre-bg': string | number;
  '--tw-prose-invert-th-borders': string | number;
  '--tw-prose-invert-td-borders': string | number;
}

interface TypographyVariables extends CSSProperties {
  '--tw-prose-visited-links': string | number;
  '--tw-prose-invert-visited-links': string | number;
}
