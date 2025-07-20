import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import styles from "../styles/shared.module.css";
import { URLS } from "../utils/constants";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ryer.io</title>
        <meta name='description' content='ryer.io is your CTO, but only when you need it' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Image width={128} height={128} src='/images/ryerio-logo256.png' alt='ryer.io' />
        <h1 className={styles.title}>ryer.io</h1>
        <span className={styles.slogan}>Pay-as-you-go fractional CTO</span>
        <Link style={{ marginTop: "1rem" }} href={URLS.calendar}>
          Book a free consultation
        </Link>
        <Link href={URLS.journal}>
          <span style={{ marginTop: "1rem" }}>Read my journals</span>
        </Link>
        <Link href={URLS.resume}>
          <span style={{ marginTop: "1rem" }}>View my resume</span>
        </Link>
        <Link href={URLS.linkedin}>
          <span style={{ marginTop: "1rem" }}>Connect with me on LinkedIn</span>
        </Link>
        <Link href={URLS.github}>
          <span style={{ marginTop: "1rem" }}>View my GitHub</span>
        </Link>
        <Link href={URLS.gitlab}>
          <span style={{ marginTop: "1rem" }}>View my GitLab</span>
        </Link>
        <Link href={URLS.twitter}>
          <span style={{ marginTop: "1rem" }}>Follow me on Twitter</span>
        </Link>
        <Link href={URLS.email}>
          <span style={{ marginTop: "1rem" }}>Email me</span>
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default Home;
