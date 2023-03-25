import Date from '@components/shared-base/Date';
import PageLayout from '@components/shared-composed/PageLayout/PageLayout';
import markdownComponents from '@lib/markdown';
import { getDataBasedOnId, getPostIds } from '@lib/posts';
import { PostProps } from '@typedefs/posts';
import { Params } from 'next/dist/server/router';
import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function ProjectPage(data: PostProps) {
  if (!data) return null;

  return (
    <PageLayout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Link href={'/'}>HOME</Link>
      <br />
      <Date dateString={data.date} />
      <ReactMarkdown components={markdownComponents}>
        {data.markDown}
      </ReactMarkdown>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const idParams = getPostIds('docs');
  return {
    paths: idParams,
    fallback: false
  };
}

export async function getStaticProps({ params }: Params) {
  const { date, id, markDown, title, description } = await getDataBasedOnId(
    params.id,
    'docs'
  );
  return {
    props: {
      id,
      markDown,
      description,
      title,
      date
    }
  };
}