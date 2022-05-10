import type { NextApiRequest, NextApiResponse } from "next";
import { URLS } from "../../utils/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).redirect(URLS.calendar);
}
