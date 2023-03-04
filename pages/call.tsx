import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/shared-composed/Footer/Footer";
import styles from "../styles/shared.module.css";
import callStyles from "../styles/Call.module.css";
import { URLS } from "../lib/constants";

const Home: NextPage = () => {
	const { query } = useRouter();

	return (
		<>
			<Image
				width={128}
				height={128}
				src='/images/ryerio-logo256.png'
				alt='ryer.io'
			/>
			<h1 className={styles.title}>ryer.io</h1>
			<span className={styles.slogan}>Pay-as-you-go fractional CTO</span>
			{Object.keys(query).length ? (
				query?.confirmed && (
					<div className={callStyles.confirmed_container}>
						<span className={callStyles.confirmed}>{`Yes! Our ${
							query.type == "intro"
								? "introductory"
								: query.type == "planning"
								? "mission planning"
								: query.type == "checkin"
								? "check-in"
								: query.type == "insight"
								? "insight"
								: "general discussion"
						} call is scheduled! Let's build something amazing together.`}</span>
					</div>
				)
			) : (
				<Link href={URLS.calendar}>
					<a className={callStyles.link}>book time with me today</a>
				</Link>
			)}
			<Link href='/'>
				<a className={callStyles.link}>back to ryer.io</a>
			</Link>
		</>
	);
};

export default Home;
