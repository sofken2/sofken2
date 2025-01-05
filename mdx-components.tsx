import { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper({ children }) {
      return (<div className="prose prose-slate prose-relative-weight prose-theme-override markdown-body">
        {children}
      </div>);
    },
    ...components,
  };
}
