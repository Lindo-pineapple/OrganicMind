import jwt, {
  JwtPayload,
  TokenExpiredError,
  JsonWebTokenError,
} from "jsonwebtoken";

export const CheckExpiry = (token: string, secretKey: string): boolean => {
  try {
    // Verify the JWT and decode it
    const decoded = jwt.verify(token, secretKey) as JwtPayload;

    // Extract the expiration time (exp) from the decoded payload
    const expTimestamp = decoded.exp as number;

    // Compare the expiration time with the current time
    const currentTime = Math.floor(Date.now() / 1000);

    // Return whether the token is expired
    return currentTime > expTimestamp;
  } catch (error) {
    // Handle errors such as invalid signature or expired token
    if (error instanceof TokenExpiredError) {
      // Token is expired
      console.log("Token expired.");
      return true;
    } else if (error instanceof JsonWebTokenError) {
      // Token is invalid
      console.log("Invalid token.");
      return true;
    } else {
      // Other errors
      console.error("Error verifying token:", error);
      return true; // Consider the token invalid if an unknown error occurs
    }
  }
};
