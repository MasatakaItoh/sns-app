import {
  AiFillBell,
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
  AiTwotoneSetting,
} from "react-icons/ai";
import { BsBookmarkFill, BsFillPersonFill } from "react-icons/bs";

import { Avatar, Button, ButtonProps } from "@components/elements";

type LeftBarButtonProps = Pick<ButtonProps, "children" | "leftIcon">;

const LeftBarButton = ({ children, leftIcon }: LeftBarButtonProps) => {
  return (
    <Button size={"lg"} variant={"ghost"} leftIcon={leftIcon}>
      {children}
    </Button>
  );
};

export const LeftBar = () => {
  return (
    <div className={"grid gap-4 px-6 py-8"}>
      <div className={"grid gap-2"}>
        <LeftBarButton leftIcon={<AiFillHome />}>ホーム</LeftBarButton>
        <LeftBarButton leftIcon={<AiOutlineSearch />}>検索</LeftBarButton>
        <LeftBarButton leftIcon={<AiFillBell />}>通知</LeftBarButton>
        <LeftBarButton leftIcon={<AiFillMessage />}>メッセージ</LeftBarButton>
        <LeftBarButton leftIcon={<BsBookmarkFill />}>ブックマーク</LeftBarButton>
        <LeftBarButton leftIcon={<BsFillPersonFill />}>プロフィール</LeftBarButton>
        <LeftBarButton leftIcon={<AiTwotoneSetting />}>設定</LeftBarButton>
      </div>

      <div className={"pl-3"}>
        <Avatar name={"todo"} />
      </div>
    </div>
  );
};
