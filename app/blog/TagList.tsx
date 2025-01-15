import Link from 'next/link';

export default function TagList({
  tags,
}: {
  tags: string[];
}) {
  return (<ul className="not-prose flex flex-row flex-wrap gap-2 bg-slate-100 p-2 mt-4 rounded-lg dark:bg-slate-800 text-[--tw-prose-body]">
    {tags.map((tag) => (
      <li key={tag} className="bg-emerald-300 rounded-full px-2 py-1 hover:bg-emerald-200 border-1.5 border-transparent z-[1] transition-colors dark:border-emerald-400 dark:bg-slate-900 dark:hover:bg-slate-700">
        <Link href={`/tags/${tag}`} className="flex items-center text-base/none ">
          <span className="icon-mdi-light-tag" />
          <span className="-translate-y-px">{tag}</span>
        </Link>
      </li>
    ))}
    {(tags.length <= 0) && <span>タグがありません</span>}
  </ul>);
}
