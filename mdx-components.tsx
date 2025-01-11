import { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper({ children }) {
      return (<div className="prose prose-slate prose-relative-weight prose-theme-override my-16 max-w-full lg:prose-lg dark:prose-invert">
        {children}
      </div>);
    },
    ...components,
  };
}
