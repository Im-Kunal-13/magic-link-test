import { MAX_AGE, setTokenCookie } from "./auth-cookie";
import Iron from "@hapi/iron";

const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

export const setLoginSession = async (res: any, metaData: any) => {
  const session = {
    ...metaData,
    created: Date.now(),
    maxAge: MAX_AGE,
  };

  const token = await Iron.seal(session, TOKEN_SECRET, Iron.defaults);
  setTokenCookie(res, token);
  console.log(token);
};
