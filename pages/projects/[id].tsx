import { Params } from "next/dist/server/router";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Date from "../../components/shared-base/Date";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import Date from "../../components/shared-base/Date";
import { getDataBasedOnId, getPostIds } from "../../lib/posts";

type PostProps = {
	id: string
	markDown: string
	title: string
	date: string
}

export default function ProjectPage(data: PostProps) {
	if (!data) return null;

	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>
			<Date dateString={data.date}/>
			<ReactMarkdown>{data.markDown}</ReactMarkdown>
		</>
	);
};

export async function getStaticPaths() {
	const projectIdParams = getPostIds("projects")
	return {
		paths: projectIdParams,
		fallback: false
	}
  }

  export async function getStaticProps({ params }: Params) {
	// Fetch necessary data for the blog post using params.id
	const { date, id, markDown, title } = await getDataBasedOnId(params.id, "projects");
	return {
	  props: {
		id,
		markDown,
		title,
		date,
	  },
	};
  }