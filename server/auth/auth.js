import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function middleware(req, res, next) {
try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
  }
}   

export default middleware;