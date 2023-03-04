import Card from '@components/shared-base/Card/Card';
import Services from '@components/shared-composed/Services/Services';
import { URLS } from '@lib/constants';
import { getAllPostsWithFrontMatter } from '@lib/posts';
import styles from '@styles/shared.module.css';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const Home: NextPage = ({ posts }: any) => {
  useEffect(() => {
    (async () => {
      fetch('/api/notion', {
        method: 'get'
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log('result: ', res);
        });
    })();
  }, []);

  return (
    <>
      <Image
        width={128}
        height={128}
        src='/images/ryerio-logo256.png'
        alt='ryer.io'
      />
      <h1 className={styles.title}>ryer.io</h1>
      <span className={styles.slogan}>CTO as a Service</span>
      <Link href={URLS.calendar}>
        <a className={styles.cta}>Meet with me</a>
      </Link>
      <Services title='The impact I bring you is real.'>
        <Card
          headline='Keep your vision and brand healthy across your entire digital presence'
          sub="I'm a professional digital account administrator. Anywhere your brand and vision can be implemented into your digital toolset, it will be well-represented. You'll be compliant with 3rd-party requirements so small problems don't get big."
          image='/images/givemeahand.png'
          imageAlt='hand'
        />
        <Card
          headline="I bring digital agility to your business. Whether it's making new websites, mobile apps, or helping to design and market digital products."
          sub=''
          image='/images/givemeahand.png'
          imageAlt='hand'
        />
        <Card
          headline="You don't like dealing with hardware and software, but I do."
          sub=''
          image='/images/givemeahand.png'
          imageAlt='hand'
        />
      </Services>
      <div className='posts'>
        {!posts && <div>No posts!</div>}
        <ul>
          {posts &&
            posts
              .sort(
                (a: any, b: any) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((post: any) => {
                return (
                  <article key={post.id} className='post-title'>
                    <Link href={{ pathname: `/projects/${post.id}` }}>
                      <a>
                        {`${post.frontMatter.title} - ${post.frontMatter.description}`}
                      </a>
                    </Link>
                    <br />
                    <code>{post.frontMatter.tags.join(' | ')}</code>
                  </article>
                );
              })}
        </ul>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPostsWithFrontMatter('projects');
  return {
    props: {
      posts,
      title: 'Projects',
      description: 'My personal projects'
    }
  };
}
