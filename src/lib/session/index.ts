import jwt from "jsonwebtoken";
export function decrypt(token: string) {
  console.log("kjhg", jwt);
  return jwt.verify(token, process.env.JWT_KEY || "your-secret-key");
}
