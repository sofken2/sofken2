import Link from 'next/link';
import { type MDXArticle } from './utils';

export default async function ArticleList({
  articles,
}: {
  articles: {
    name: string;
    page: MDXArticle;
  }[];
}) {
  return (<ol className="not-prose space-y-4">
    {articles.map(({ name, page: { meta } }) => (<li key={name}>
      <article className="relative bg-white rounded-lg p-4 hover:bg-slate-100 shadow-slate-200 shadow-sm transition-all">

        <h1 className="text-4xl">
          <Link href={`/blog/${name}`} className="before:absolute before:inset-0 before:z-0">
            {meta?.title ?? name}
          </Link>
        </h1>
        {meta?.auther && <div className="flex items-center gap-1">
          <span className="icon-mslight-edit-note-outline translate-y-px" />
          <span className="text-lg">{meta.auther}</span>
        </div>}
        {meta?.date && <div className="flex items-center gap-1">
          <span className="icon-mslight-calendar-month-outline translate-y-px" />
          <span className="text-lg">{meta.date}</span>
        </div>}

        <div className="flex flex-row flex-wrap gap-2 bg-slate-300 p-2 mt-4 rounded-lg">
          {meta?.tags && meta.tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} className="flex items-center text-base/none bg-emerald-300 rounded-full px-2 py-1 hover:bg-emerald-200 z-[1]">
              <span className="icon-mdi-light-tag translate-y-px" />
              <span className="">{tag}</span>
            </Link>
          ))}
          {(meta?.tags == null) && <span>タグがありません</span>}
        </div>
      </article>
    </li>))}
  </ol>);
}
