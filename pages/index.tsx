import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>ryer.io</title>
				<meta
					name='description'
					content='ryer.io is your CTO, but only when you need it'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Image
					width={128}
					height={128}
					src='/images/ryerio-logo256.png'
					alt='ryer.io'
				/>
				<h1 className={styles.title}>ryer.io</h1>
				<span className={styles.slogan}>Pay-as-you-go fractional CTO</span>
				<button className={styles.cta}>Book a free consultation</button>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					built by (of course): ryer.io
				</a>
			</footer>
		</>
	);
};

export default Home;
