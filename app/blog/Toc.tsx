import { TocEntry } from '@stefanprobst/rehype-extract-toc';
import Link from 'next/link';

export default function Toc({
  toc,
  min = 1,
  max = 6,
}: {
  toc: TocEntry[];
  min?: number;
  max?: number;
}) {
  return (<nav className="prose-li:my-1 prose-ol:my-2 prose-ul:my-2 my-8 rounded-md bg-slate-100 p-4">
    <ol>
      {toc.map(function transform({ id, value, children, depth }): React.ReactNode {
        if (depth < min) {
          return (children && children.length > 0)
            && children.map(transform);
        }
        return (<li key={id ?? value}>
          <Link href={id ?? '_blank'}>{value}</Link>
          {(children && children.length > 0 && depth < max) && <ol>
            {children.map(transform)}
          </ol>}
        </li>);
      })}
    </ol>
  </nav>);
}
