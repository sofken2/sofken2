import Link from 'next/link';
import { type MDXArticle } from './articles';
import TagList from './TagList';

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
      <article className="relative bg-white rounded-lg p-4 shadow-slate-200 shadow-md transition-colors dark:bg-slate-900 dark:shadow-none">

        <h1 className="text-4xl">
          <Link href={`/blog/${name}`} className="before:absolute before:inset-0 before:z-0">
            <span className="relative hover:underline z-[1]">{meta?.title ?? name}</span>
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

        <TagList tags={meta?.tags ?? []} />
      </article>
    </li>))}
  </ol>);
}
