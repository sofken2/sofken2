import { articles } from './articles';
import ArticleList from './ArticleList';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ブログ',
  description: 'ブログ記事一覧。',
};

export default async function BlogPage() {
  const list = await Promise.all(
    (await articles()).map(async (article) => ({
      name: article.name,
      page: await article.page(),
    })),
  );

  return (<div className="prose prose-slate prose-relative-weight prose-theme-override my-16 max-w-full lg:prose-lg dark:prose-invert">

    <h1>ブログ</h1>
    <ArticleList articles={list} />
  </div>);
}
