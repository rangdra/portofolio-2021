// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { services } from "../../data";

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services });
};
