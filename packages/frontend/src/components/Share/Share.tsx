"use client";

import { Avatar, Box, Button, Input, Stack } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { AiOutlineGif } from "react-icons/ai";
import { BsImageFill } from "react-icons/bs";
import { MdOutlineEmojiEmotions, MdPoll } from "react-icons/md";

type OptionButtonProps = {
  children: string;
  icon: ReactElement;
};

const OptionButton: FC<OptionButtonProps> = ({ children, icon }) => {
  return (
    <Button size={"xs"} variant={"ghost"} leftIcon={icon}>
      {children}
    </Button>
  );
};

export const Share: FC = () => {
  return (
    <Stack spacing={4} p={4} boxShadow={"lg"}>
      <Stack direction={"row"} spacing={4} alignItems={"center"}>
        <Avatar />
        <Box flex={1}>
          <Input placeholder={"いまどうしてる？"} />
        </Box>
      </Stack>

      <Stack direction={"row"} spacing={4} justifyContent={"space-between"} alignItems={"center"}>
        <Stack direction={"row"} spacing={1} flex={1}>
          <OptionButton icon={<BsImageFill />}>写真</OptionButton>
          <OptionButton icon={<AiOutlineGif />}>GIF</OptionButton>
          <OptionButton icon={<MdOutlineEmojiEmotions />}>気持ち</OptionButton>
          <OptionButton icon={<MdPoll />}>投稿</OptionButton>
        </Stack>

        <Button size={"sm"}>投稿</Button>
      </Stack>
    </Stack>
  );
};
