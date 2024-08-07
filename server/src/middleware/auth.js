import jwt from "jsonwebtoken";
import { API, HTTP_CODES } from "../globals.js";
import redis from "../utilities/redis.js";

const AuthSecret = API.AUTH_SECRET;

export default async (req, res, next) => {
  const token = req.header("x-auth-token");
  const RedisToken = await redis.get("token");
  if (!RedisToken || !token) {
    return res
      .status(HTTP_CODES.ACCESS_DENIED)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, AuthSecret);
    req.user = decoded;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(HTTP_CODES.ACCESS_DENIED).json({ message: "Unauthorized: Invalid token." });
    }

    return res.status(HTTP_CODES.BAD_REQUEST).json({ message: "Bad Request: Invalid token." });
  }
};
