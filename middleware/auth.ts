import jsonwebtoken from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.body;
  if (!token) {
    return res.status(403).send("Token Required");
  }

  try {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_TOKEN_KEY as string);
    console.log(decoded);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();

};

export default verifyToken;

