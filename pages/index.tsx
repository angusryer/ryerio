import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/base/Card/Card";
import Services from "../components/sections/Services/Services";
import styles from "../styles/shared.module.css";
import { URLS } from "../utils/constants";

const Home: NextPage = () => {
	return (
		<>
			<Image
				width={128}
				height={128}
				src='/images/ryerio-logo256.png'
				alt='ryer.io'
			/>
			<h1 className={styles.title}>ryer.io</h1>
			<span className={styles.slogan}>Pay-as-you-go technical leadership</span>
			<Link href={URLS.calendar}>
				<a className={styles.cta}>Book a free consultation</a>
			</Link>
			<Services title='The impact we bring you is real.'>
				<Card
					headline='Keep your vision and brand healthy across your entire digital presence'
					sub="We are professional digital account administrators. Anywhere your brand and vision can be implemented into your digital toolset, we'll make sure it's well-represented. We also make sure you're compliant with 3rd-party requirements so small problems don't get big."
					image='/images/givemeahand.png'
					imageAlt='hand'
				/>
				<Card
					headline='Be fast when you use us to make new websites, software, or to help design and market digital products'
					sub=''
					image='/images/givemeahand.png'
					imageAlt='hand'
				/>
				<Card
					headline="You don't like dealing with hardware and software, but we do"
					sub=''
					image='/images/givemeahand.png'
					imageAlt='hand'
				/>
			</Services>
		</>
	);
};

export default Home;
