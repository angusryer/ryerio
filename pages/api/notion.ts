import { NextApiRequest, NextApiResponse } from "next";
import { notion } from "../../config/notion";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const result = await notion.search({});
	console.log("API result: ", result);
	return res.status(200).send(result);
}
