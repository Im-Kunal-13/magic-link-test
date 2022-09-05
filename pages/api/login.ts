// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Magic } from "@magic-sdk/admin";
import type { NextApiRequest, NextApiResponse } from "next";
import {setLoginSession} from "../../lib/auth"

type Data = {
  done: boolean;
};

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const magic = new Magic(process.env.MAGIC_SECRET_KEY);
  const didToken = req.headers.authorization?.substring(7);
  const metaData = await magic.users.getMetadataByToken(didToken || "");
  await setLoginSession(res, metaData);
  res.send({ done: true });
}
