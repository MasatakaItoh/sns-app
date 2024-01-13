"use client";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

import { ReactionButton } from "./ReactionButton";

type LikeButtonProps = {
  count: number;
};

export const LikeButton = ({ count }: LikeButtonProps) => {
  const [like, setLike] = useState(count);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <ReactionButton icon={<AiOutlineHeart />} onClick={handleClick}>
      {like.toString()}
    </ReactionButton>
  );
};
