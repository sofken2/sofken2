import { notFound } from 'next/navigation';
import { articles } from '../articles';
import TagList from '../TagList';
import Toc from '../Toc';
import { type Metadata } from 'next';

interface PageParams {
  article: string;
}

export default async function Article({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const articleName = decodeURIComponent((await params).article);
  const article = (await articles()).find((it) => it.name == articleName);
  if (article == null) return notFound();

  const { default: Page, meta, toc } = await article.page();

  return (<div className="prose prose-slate prose-relative-weight prose-theme-override my-16 max-w-full lg:prose-lg dark:prose-invert">
    <TagList tags={meta?.tags ?? []} classes={{ wrapper: 'bg-slate-100 dark:bg-slate-900' }} />
    <Toc toc={toc} min={2} />
    <Page toc={<Toc toc={toc} min={2} />} />
  </div>);
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const list = await articles();

  return list.map(({ name }) => ({ article: name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const articleName = decodeURIComponent((await params).article);
  const article = (await articles()).find((it) => it.name == articleName);
  if (article == null) return notFound();

  return {
    title: (await article.page()).meta?.title ?? article.name,
  };
}
