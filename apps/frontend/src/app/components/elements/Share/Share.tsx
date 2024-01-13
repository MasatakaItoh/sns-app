import { ReactElement } from "react";
import { AiOutlineGif } from "react-icons/ai";
import { BsImageFill } from "react-icons/bs";
import { MdOutlineEmojiEmotions, MdPoll } from "react-icons/md";

import { Avatar, Button, Input } from "@components/elements";

type OptionButtonProps = {
  children: string;
  icon: ReactElement;
};

const OptionButton = ({ children, icon }: OptionButtonProps) => {
  return (
    <Button size={"sm"} variant={"ghost"} leftIcon={icon}>
      {children}
    </Button>
  );
};

export const Share = () => {
  return (
    <div className={"grid gap-4 p-4"}>
      <div className={"flex items-center gap-4"}>
        <Avatar name={"todo"} />
        <div className={"flex-1"}>
          <Input placeholder={"いまどうしてる？"} />
        </div>
      </div>

      <div className={"flex content-center items-center gap-4"}>
        <div className={"flex gap-1 flex-1"}>
          <OptionButton icon={<BsImageFill />}>写真</OptionButton>
          <OptionButton icon={<AiOutlineGif />}>GIF</OptionButton>
          <OptionButton icon={<MdOutlineEmojiEmotions />}>気持ち</OptionButton>
          <OptionButton icon={<MdPoll />}>投稿</OptionButton>
        </div>

        <Button>投稿</Button>
      </div>
    </div>
  );
};
