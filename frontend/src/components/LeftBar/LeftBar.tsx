"use client";

import { Avatar, Box, Button, IconButton, Stack } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { IconContext } from "react-icons";
import {
  AiFillBell,
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
  AiTwotoneSetting,
} from "react-icons/ai";
import { BsBookmarkFill, BsFillPersonFill, BsTwitter } from "react-icons/bs";

type LeftBarButtonProps = {
  children: string;
  icon: ReactElement;
};

const LeftBarButton: FC<LeftBarButtonProps> = ({ children, icon }) => {
  return (
    <Button variant={"ghost"} leftIcon={icon} justifyContent={"flex-start"}>
      {children}
    </Button>
  );
};

export const LeftBar: FC = () => {
  return (
    <Stack spacing={4} px={6} py={4}>
      <Box>
        <IconContext.Provider value={{ size: "32px" }}>
          <IconButton
            aria-label={"ホームに戻る"}
            icon={<BsTwitter />}
            size={"lg"}
            variant={"ghost"}
            borderRadius={"50%"}
          />
        </IconContext.Provider>
      </Box>

      <Stack>
        <LeftBarButton icon={<AiFillHome />}>ホーム</LeftBarButton>
        <LeftBarButton icon={<AiOutlineSearch />}>検索</LeftBarButton>
        <LeftBarButton icon={<AiFillBell />}>通知</LeftBarButton>
        <LeftBarButton icon={<AiFillMessage />}>メッセージ</LeftBarButton>
        <LeftBarButton icon={<BsBookmarkFill />}>ブックマーク</LeftBarButton>
        <LeftBarButton icon={<BsFillPersonFill />}>プロフィール</LeftBarButton>
        <LeftBarButton icon={<AiTwotoneSetting />}>設定</LeftBarButton>
      </Stack>

      <Box>
        <Avatar />
      </Box>
    </Stack>
  );
};
