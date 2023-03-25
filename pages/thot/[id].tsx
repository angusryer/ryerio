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
  const projectIdParams = getPostIds('thot');
  return {
    paths: projectIdParams,
    fallback: false
  };
}

export async function getStaticProps({ params }: Params) {
  const { date, id, description, markDown, title } = await getDataBasedOnId(
    params.id,
    'thot'
  );
  return {
    props: {
      id,
      markDown,
      title,
      description,
      date
    }
  };
}
