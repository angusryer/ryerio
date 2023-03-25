import Card from '@components/shared-base/Card/Card';
import PageLayout from '@components/shared-composed/PageLayout/PageLayout';
import PostLinkList from '@components/shared-composed/PostLinkList';
import Services from '@components/shared-composed/Services/Services';
import { URLS } from '@lib/constants';
import { getAllPostsWithFrontMatter } from '@lib/posts';
import styles from '@styles/shared.module.css';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const Home: NextPage = ({ make, docs, thot }: any) => {
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
    <PageLayout>
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
      <section className='posts'>
        <PostLinkList content={make} category={'make'} />
        <PostLinkList content={docs} category={'docs'} />
        <PostLinkList content={thot} category={'thot'} />
      </section>
    </PageLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const make = getAllPostsWithFrontMatter('make');
  const docs = getAllPostsWithFrontMatter('docs');
  const thot = getAllPostsWithFrontMatter('thot');
  return {
    props: {
      make: {
        make,
        title: "Things I've Made"
      },
      docs: {
        docs,
        title: "How I've Done Things"
      },
      thot: {
        thot,
        title: 'Inside my Mind'
      }
    }
  };
}
