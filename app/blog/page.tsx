import { articles } from './utils';
import ArticleList from './ArticleList';

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
