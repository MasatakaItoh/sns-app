import express from "express";
import { PostModel } from "../models/Post";
import { UserModel } from "../models/User";

export const postsRouter = express.Router();

/**
 * 投稿を作成する
 */
postsRouter.post("/", async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * 投稿を取得する
 */
postsRouter.get("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * 投稿を更新する
 */
postsRouter.put("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (post?.userId === req.body.userId) {
      await post?.updateOne({
        $set: req.body,
      });
      return res.status(200).json("投稿内容を更新しました");
    } else {
      return res.status(403).json("あなたは他の人の投稿内容を更新できません");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

/**
 * 投稿を削除する
 */
postsRouter.delete("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (post?.userId === req.body.userId) {
      await post?.deleteOne();
      return res.status(200).json("投稿を削除しました");
    } else {
      return res.status(403).json("あなたは他の人の投稿を削除できません");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

/**
 * 投稿にいいねする
 */
postsRouter.put("/:id/likes", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (!post?.likes.includes(req.body.userId)) {
      await post?.updateOne({
        $push: {
          likes: req.body.userId,
        },
      });
      res.status(200).json("投稿にいいねしました");
    } else {
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json("投稿のいいねを外しました");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * プロフィールのタイムラインの投稿を取得する
 */
postsRouter.get("/profile/timeline/:userName", async (req, res) => {
  try {
    const user = await UserModel.findOne({ userName: req.params.userName });
    const posts = await PostModel.find({ userId: user?._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * タイムラインの投稿を取得する
 */
postsRouter.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.userId);
    const userPosts = await PostModel.find({ userId: currentUser?._id });
    const followingsPosts = await Promise.all(
      (currentUser?.followings ?? []).map((id) => {
        return PostModel.find({ userId: id });
      })
    );
    res.status(200).json(userPosts.concat(...followingsPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});
