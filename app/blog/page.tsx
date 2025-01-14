import fs from 'fs/promises';
import Link from 'next/link';
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

export async function articles() {
  return (await fs.readdir('app/blog'))
    .map((it) => path.parse(it))
    .filter((it) => it.ext === '.md' || it.ext === '.mdx')
    .map((it) => ({
      path: it,
      name: it.name,
      async page() { return import(`./${it.base}`) as Promise<MDXArticle>; },
    }));
}

export default async function Home() {
  const list = await articles();

  return (<div className="prose prose-slate prose-relative-weight prose-theme-override my-16 max-w-full lg:prose-lg dark:prose-invert">

    <h1>List</h1>
    <ol>
      {list.map(async ({ name, page }) => (<li key={name}>
        <Link href={`/blog/${name}`}>{(await page()).meta?.title ?? name}</Link>
      </li>))}
    </ol>
  </div>);
}
