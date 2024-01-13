import Image from "next/image";
import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";

import { Avatar } from "@components/elements";
import { getUser } from "@features/Users";
import { dayjs } from "@libs/dayjs";
import { getPath } from "@utils/getPath";

import { PostResponse } from "../types";

import { LikeButton } from "./LikeButton";
import { ReactionButton } from "./ReactionButton";

type PostProps = PostResponse;

export const Post = async ({ userId, desc, img, likes, createdAt }: PostProps) => {
  const user = await getUser({ id: userId });

  const timeFromNow = dayjs(createdAt).fromNow();

  return (
    <div
      className={
        "grid gap-4 p-4 bg-white border-t border-r border-l border-gray-300 last-of-type:border-b"
      }
    >
      <div className={"flex gap-2 justify-between items-center"}>
        <Link href={getPath.profile(user.userName)} className={"rounded-full"}>
          <Avatar src={user.profilePicture} name={user.userName} />
        </Link>

        <div className={"flex gap-3 flex-1"}>
          <p className={"font-bold"}>{user.userName}</p>
          <p>{timeFromNow}</p>
        </div>
      </div>

      <div>
        <p>{desc}</p>
        {img && <Image src={img} alt={""} width={100} height={100} />}
      </div>

      <div className={"flex gap-1"}>
        <LikeButton count={likes?.length ?? 0} />
        <ReactionButton icon={<FiMessageCircle />}>{0}</ReactionButton>
      </div>
    </div>
  );
};
