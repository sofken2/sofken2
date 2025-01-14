import { notFound } from 'next/navigation';
import { articles } from '../utils';

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
  const { article: articleName } = await params;
  const article = (await articles()).find((it) => it.name == articleName);
  if (article == null) return notFound();

  const { default: Page, meta } = await article.page();
  return (<div className="my-16">
    <div className="flex flex-row gap-2 bg-slate-300 p-4 rounded-lg">
      {(meta?.tags ?? []).map((tag) => <span key={tag} className="flex items-center leading-none bg-emerald-300 rounded-full px-2 py-1 before:icon-mdi-light-tag">{tag}</span>)}
    </div>
    <Page />
  </div>);
}

export async function generateStaticParams() {
  const list = await articles();

  return list.map(({ name }) => ({ article: name }));
}
