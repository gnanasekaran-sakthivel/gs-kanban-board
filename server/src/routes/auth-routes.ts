import { Router, Request, Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token

  // read the user from the request
  const { username, password } = req.body;

  // find the user in the database by username
  const user = await User.findOne({
    where: { username },
  });

  // if the user does not exist
  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // now the user exists
  // check if the password is valid
  const isPasswordValid = await bcrypt.compare(password, user.password);

  // if the password is not valie
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Authentication failed",
    });
  }

  // not the user exists and the password is good
  // prepare and send the JWT token
  const secretKey = process.env.JWT_SECRET_KEY || "";

  // generate a JWT token for the authenticated user
  const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
  return res.json({ token }); // Send the token as a JSON response
};

const router = Router();

// POST /login - Login a user
router.post("/login", login);

export default router;
