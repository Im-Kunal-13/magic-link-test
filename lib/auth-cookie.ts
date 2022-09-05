import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export const MAX_AGE: number = 60 * 60 * 8; // 8 hours

export const setTokenCookie = (res: NextApiResponse, token: string) => {
  const cookieOptions = {
    maxAge: MAX_AGE,
    // This will prevent client-side javascript to access this cookie.
    httpOnly: true,
    // If this is set to true, then the cookie will only be sent through https protocol
    secure: process.env.NODE_ENV === "production",
    path: '/',
    sameSite: 'lax'
  };
  const cookie = serialize("token", token, cookieOptions);
  res.setHeader("Set-Cookie", cookie);
};
