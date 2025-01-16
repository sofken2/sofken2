import Link from 'next/link';
import { clsx } from '../utils';

export default function TagList({
  tags,
  classes: {
    wrapper: wrapperClass = 'bg-slate-100 dark:bg-slate-800',
    tags: tagsClass = clsx(
      'bg-emerald-300 hover:bg-emerald-200 border-transparent',
      'dark:bg-slate-900 dark:border-emerald-400 dark:hover:bg-slate-700',
    ),
  } = {},
}: {
  tags: string[];
  classes?: {
    wrapper?: string;
    tags?: string;
  };
}) {
  return (<ul className={clsx('not-prose flex flex-row flex-wrap gap-2 p-2 mt-4 rounded-lg text-[--tw-prose-body] dark:shadow-none relative z-[1]', wrapperClass)}>
    {tags.map((tag) => (
      <li key={tag}>
        <Link href={`/tags/${tag}`} className={clsx('flex items-center text-base/none rounded-full px-2 py-1 border-1.5 transition-colors', tagsClass)}>
          <span className="icon-mdi-light-tag" />
          <span className="-translate-y-px">{tag}</span>
        </Link>
      </li>
    ))}
    {(tags.length <= 0) && <span>タグがありません</span>}
  </ul>);
}
