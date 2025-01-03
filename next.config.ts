import { type NextConfig } from 'next';
import createMDX from '@next/mdx';
import rehypeKatex from 'rehype-katex';
import { type KatexOptions } from 'katex';
import remarkGfm, { type Options as GFMOptions } from 'remark-gfm';
import remarkMath, { type Options as MathOptions } from 'remark-math';
import rehypePrettyCode, { type Options as ShikiOptions } from 'rehype-pretty-code';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      [remarkGfm, {} satisfies GFMOptions],
      [remarkMath, {} satisfies MathOptions],
    ],
    rehypePlugins: [
      [rehypeKatex, { strict: true, throwOnError: true, output: 'mathml' } satisfies KatexOptions],
      [rehypePrettyCode, { theme: 'light-plus' } satisfies ShikiOptions],
    ],
  },
});

export default withMDX(nextConfig);
