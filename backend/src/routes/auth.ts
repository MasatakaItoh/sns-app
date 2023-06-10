import express from "express";
import { UserModel } from "../models/User";

export const authRouter = express.Router();

/**
 * ユーザー登録
 */
authRouter.post("/register", async (req, res) => {
  try {
    const newUser = await new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    // TODO: ユーザー登録済みのエラーハンドリング
    return res.status(500).json(err);
  }
});

/**
 * ログイン
 */
authRouter.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("ユーザーが見つかりません");

    const validatedPassword = req.body.password === user.password;
    if (!validatedPassword) return res.status(400).json("パスワードが異なります");

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});
