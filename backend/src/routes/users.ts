import express from "express";
import { UserModel } from "../models/User";

export const usersRouter = express.Router();

/**
 * ユーザー情報の更新
 */
usersRouter.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("ユーザー情報が更新されました");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("あなたは自分のアカウントの時だけ情報を更新できます");
  }
});

/**
 * ユーザー情報の削除
 */
usersRouter.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      res.status(200).json("ユーザー情報が削除されました");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("あなたは自分のアカウントの時だけ情報を削除できます");
  }
});

/**
 * ユーザー情報の取得
 */
usersRouter.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    // @ts-ignore
    const { password, updatedAt, ...rest } = user?._doc;
    res.status(200).json(rest);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * ユーザーのフォロー
 */
usersRouter.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);
      const currentUser = await UserModel.findById(req.body.userId);

      if (!user?.followers.includes(req.body.userId)) {
        await user?.updateOne({
          $push: {
            followers: req.body.userId,
          },
        });
        await currentUser?.updateOne({
          $push: {
            followings: req.params.id,
          },
        });
        res.status(200).json("フォローに成功しました");
      } else {
        return res.status(403).json("あなたはすでにこのユーザーをフォローしています");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    return res.status(500).json("自分自身はフォローできません");
  }
});

/**
 * ユーザーのフォローを外す
 */
usersRouter.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);
      const currentUser = await UserModel.findById(req.body.userId);

      if (user?.followers.includes(req.body.userId)) {
        await user.updateOne({
          $pull: {
            followers: req.body.userId,
          },
        });
        await currentUser?.updateOne({
          $pull: {
            followings: req.params.id,
          },
        });
        res.status(200).json("フォローを解除しました");
      } else {
        return res.status(403).json("あなたはこのユーザーをフォロー解除できません");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    return res.status(500).json("自分自身はフォロー解除できません");
  }
});
