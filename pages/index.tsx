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
				<Link href={URLS.calendar}>
					<a className={styles.cta}>Book a free consultation</a>
				</Link>
			</main>

			<Footer />
		</>
	);
};

export default Home;
