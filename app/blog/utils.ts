import fs from 'fs/promises';
import path from 'path';

export interface Frontmatter {
  id?: string;
  title?: string;
  auther?: string;
  date?: string;
  category?: string;
  tags?: string[];
}

export interface MDXArticle {
  default: React.FC<unknown>;
  meta?: Frontmatter;
}

export interface ArticleData {
  path: path.ParsedPath;
  name: string;
  page(): Promise<MDXArticle>;
}

export async function articles(): Promise<ArticleData[]> {
  return (await fs.readdir('app/blog'))
    .map((it) => path.parse(it))
    .filter((it) => it.ext === '.md' || it.ext === '.mdx')
    .map((it) => ({
      path: it,
      name: it.name,
      async page() { return import(`./${it.base}`); },
    }));
}
