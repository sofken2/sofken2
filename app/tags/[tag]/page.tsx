import { articles } from '@/app/blog/articles';
import ArticleList from '@/app/blog/ArticleList';
import { type Metadata } from 'next';

interface PageParams {
  tag: string;
}

export default async function TagPage({ params }: { params: Promise<PageParams> }) {
  const tag = decodeURIComponent((await params).tag);
  const list = (await Promise.all(
    (await articles()).map(async (article) => ({
      name: article.name,
      page: await article.page(),
    })),
  )).filter((article) => (
    (article.page.meta?.tags ?? []).includes(tag)
  ));

  return (<div className="prose prose-slate prose-relative-weight prose-theme-override my-16 max-w-full lg:prose-lg dark:prose-invert">

    <h1>{tag}タグの記事一覧</h1>
    <ArticleList articles={list} />
  </div>);
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const tags = (await Promise.all(
    (await articles()).map(async (article) => await article.page()),
  )).flatMap((page) => (
    page.meta?.tags ?? []
  )).map((tag) => ({
    tag: tag,
  }));

  return [...new Set(tags)];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const tag = decodeURIComponent((await params).tag);
  const list = (await Promise.all(
    (await articles()).map(async (article) => ({
      name: article.name,
      page: await article.page(),
    })),
  )).filter((article) => (
    (article.page.meta?.tags ?? []).includes(tag)
  ));

  return {
    title: `${tag}タグの記事一覧（${list.length}件）`,
  };
}
