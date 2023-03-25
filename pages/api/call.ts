import type { NextApiRequest, NextApiResponse } from 'next';
import { URLS } from '../../lib/constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).redirect(URLS.calendar);
}
