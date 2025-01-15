import { type NextConfig } from 'next';
import createMDX from '@next/mdx';
import rehypeKatex from 'rehype-katex';
import { type KatexOptions } from 'katex';
import remarkGfm, { type Options as GFMOptions } from 'remark-gfm';
import remarkMath, { type Options as MathOptions } from 'remark-math';
import rehypePrettyCode, { type Options as ShikiOptions } from 'rehype-pretty-code';
import remarkBreaks from 'remark-breaks';
import remarkToc, { type Options as TocOptions } from 'remark-toc';
import rehypeSlug, { type Options as SlugOptions } from 'rehype-slug';
import rehypeAutolinkHeadings, { type Options as AutolinkOptions } from 'rehype-autolink-headings';
import remarkFrontmatter, { type Options as FrontmatterOptions } from 'remark-frontmatter';
import remarkMdxFrontmatter, { type RemarkMdxFrontmatterOptions } from 'remark-mdx-frontmatter';
import rehypeToc from '@stefanprobst/rehype-extract-toc';
import rehypeExtractToc, {type RehypeExportTocMdxOptions} from '@stefanprobst/rehype-extract-toc/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // actions/configure-pagesが仕事をしないので以下のurlを参考に自分で
  // https://github.com/actions/configure-pages/blob/main/src/fixtures/next/default.expected.js
  ...(process.env.deployment == 'preview' && {
    output: 'export',
    basePath: process.env.base_path,
    images: {
      unoptimized: true,
    },
    env: {
      deployment: process.env.deployment,
    },
  }),
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      [remarkGfm, {} satisfies GFMOptions],
      [remarkMath, {} satisfies MathOptions],
      [remarkBreaks, {}],
      [remarkToc, { heading: '目次|もくじ|(table[ -]of[ -])?contents?|toc', ordered: true } satisfies TocOptions],
      [remarkFrontmatter, { type: 'yaml', marker: '-' } satisfies FrontmatterOptions],
      [remarkMdxFrontmatter, { name: 'meta' } satisfies RemarkMdxFrontmatterOptions],
    ],
    rehypePlugins: [
      [rehypeKatex, { strict: true, throwOnError: true, output: 'mathml' } satisfies KatexOptions],
      [rehypePrettyCode, { theme: { light: 'light-plus', dark: 'dark-plus' } } satisfies ShikiOptions],
      [rehypeSlug, {} satisfies SlugOptions],
      [rehypeAutolinkHeadings, { behavior: 'append' } satisfies AutolinkOptions],
      [rehypeToc, {}],
      [rehypeExtractToc, { name: 'toc' } satisfies RehypeExportTocMdxOptions],
    ],
  },
});

export default withMDX(nextConfig);
