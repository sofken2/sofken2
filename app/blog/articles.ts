import fs from 'fs/promises';
import path from 'path';
import { type Toc } from '@stefanprobst/rehype-extract-toc';
import { type MDXProps, type Element } from 'mdx/types';

export interface Frontmatter {
  id?: string;
  title?: string;
  auther?: string;
  date?: string;
  category?: string;
  tags?: string[];
}

export interface MDXArticle {
  toc: Toc;
  meta?: Frontmatter;
  default(props: MDXProps): Element;
}

export interface ArticleData {
  path: path.ParsedPath;
  name: string;
  page(): Promise<MDXArticle>;
}

export async function articles(): Promise<ArticleData[]> {
  return (await fs.readdir('posts'))
    .map((it) => path.parse(it))
    .filter((it) => it.ext === '.md' || it.ext === '.mdx')
    .map((it) => ({
      path: it,
      name: it.name,
      async page() { return import(`@/posts/${it.base}`); },
    }));
}
