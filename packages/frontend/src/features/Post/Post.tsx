"use client";

import { Avatar, Box, Button, IconButton, Stack, Text, type ButtonProps } from "@chakra-ui/react";
// import Image from "next/image";
import { FC, ReactElement, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";

type ReactionButtonProps = ButtonProps & {
  children: string;
  icon: ReactElement;
};

const ReactionButton: FC<ReactionButtonProps> = ({ children, icon, ...props }) => {
  return (
    <Button size={"xs"} variant={"ghost"} leftIcon={icon} {...props}>
      {children}
    </Button>
  );
};

const LikeButton: FC = () => {
  const [like, setLike] = useState(0);
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

export const Post: FC = () => {
  return (
    <Stack spacing={4} p={4} boxShadow={"lg"}>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"} alignItems={"center"}>
        <Avatar />

        <Box flex={1}>
          <Text>user name</Text>
        </Box>

        <IconButton
          aria-label={"メニューを開く"}
          icon={<BsThreeDots />}
          size={"sm"}
          variant={"ghost"}
        />
      </Stack>

      <Box>
        <Text>text text</Text>
        {/*<Image />*/}
      </Box>

      <Stack direction={"row"} spacing={1}>
        <LikeButton />
        <ReactionButton icon={<FiMessageCircle />}>5</ReactionButton>
      </Stack>
    </Stack>
  );
};
