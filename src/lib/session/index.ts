import jwt from "jsonwebtoken";
export function decrypt(token: string) {
  return jwt.verify(token, process.env.JWT_KEY || "your-secret-key");
}
