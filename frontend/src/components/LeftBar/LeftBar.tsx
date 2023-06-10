"use client";

import { Avatar, Box, Button, type ButtonProps, IconButton, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
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

import { getPath } from "@/utils";

type LeftBarButtonProps = ButtonProps & {
  children: string;
  icon: ReactElement;
  href?: string;
};

const LeftBarButton: FC<LeftBarButtonProps> = ({ children, icon, ...props }) => {
  return (
    <Button
      variant={"ghost"}
      size={"lg"}
      leftIcon={<IconContext.Provider value={{ size: "24px" }}>{icon}</IconContext.Provider>}
      iconSpacing={4}
      justifyContent={"flex-start"}
      {...props}
    >
      {children}
    </Button>
  );
};

export const LeftBar: FC = () => {
  return (
    <Stack spacing={4} px={6} py={4}>
      <Box pl={3}>
        <IconContext.Provider value={{ size: "24px" }}>
          <IconButton
            aria-label={"ホームに戻る"}
            icon={<BsTwitter />}
            size={"lg"}
            variant={"ghost"}
            as={NextLink}
            href={getPath.home}
            borderRadius={"50%"}
          />
        </IconContext.Provider>
      </Box>

      <Stack>
        <LeftBarButton icon={<AiFillHome />} as={NextLink} href={getPath.home}>
          ホーム
        </LeftBarButton>
        <LeftBarButton icon={<AiOutlineSearch />}>検索</LeftBarButton>
        <LeftBarButton icon={<AiFillBell />}>通知</LeftBarButton>
        <LeftBarButton icon={<AiFillMessage />}>メッセージ</LeftBarButton>
        <LeftBarButton icon={<BsBookmarkFill />}>ブックマーク</LeftBarButton>
        <LeftBarButton icon={<BsFillPersonFill />} as={NextLink} href={getPath.profile}>
          プロフィール
        </LeftBarButton>
        <LeftBarButton icon={<AiTwotoneSetting />}>設定</LeftBarButton>
      </Stack>

      <Box pl={3}>
        <Avatar />
      </Box>
    </Stack>
  );
};
