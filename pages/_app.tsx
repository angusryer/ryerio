import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";

function App({ Component, pageProps }: AppProps) {
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
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default App;
