import Image from "next/image";

import { Avatar } from "@components/elements";
import { getUserWithQuery } from "@features/Users";

type ProfileProps = {
  userName: string;
};

export const Profile = async ({ userName }: ProfileProps) => {
  const user = await getUserWithQuery({ name: userName });

  return (
    <div>
      <div className={"bg-gray-100 w-full h-[200px]"}>
        {user.coverPicture && <Image src={user.coverPicture} alt={""} />}
      </div>

      <div className={"-mt-16 px-6"}>
        <Avatar src={user.profilePicture} size={"xl"} name={user.userName} />
      </div>

      <div className={"grid gap-2 mt-2 px-3"}>
        <p className={"text-xl font-bold"}>{user.userName}</p>

        {user.desc && <p className={"text-sm"}>{user.desc}</p>}

        <div className={"flex gap-3"}>
          <p className={"text-sm"}>{user.followings?.length} フォロー中</p>
          <p className={"text-sm"}>{user.followers?.length} フォロワー</p>
          {user.city && <p className={"text-sm"}>出身：{user.city}</p>}
        </div>
      </div>
    </div>
  );
};
