import { notFound } from 'next/navigation';
import { articles } from '../articles';
import TagList from '../TagList';
import Toc from '../Toc';

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
  const { article: articleName } = await params;
  const article = (await articles()).find((it) => it.name == articleName);
  if (article == null) return notFound();

  const { default: Page, meta, toc } = await article.page();

  return (<div className="prose prose-slate prose-relative-weight prose-theme-override my-16 max-w-full lg:prose-lg dark:prose-invert">
    <TagList tags={meta?.tags ?? []} />
    <Toc toc={toc} min={2} />
    <Page toc={<Toc toc={toc} min={2} />} />
  </div>);
}

export async function generateStaticParams() {
  const list = await articles();

  return list.map(({ name }) => ({ article: name }));
}
