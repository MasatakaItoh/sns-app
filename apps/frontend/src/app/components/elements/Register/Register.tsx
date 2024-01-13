import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

import { Button, Input } from "@components/elements";
import { getPath } from "@utils/getPath";

export const Register = () => {
  return (
    <div className={"grid gap-6"}>
      <div className={"flex flex-col items-center"}>
        <BsTwitter className={"w-10 h-10"} />
        <h1 className={"text-3xl mt-4"}>アカウント作成</h1>
      </div>

      <div className={"grid gap-2 mt-4"}>
        <Input placeholder={"ユーザー名"} />
        <Input type={"email"} placeholder={"Eメール"} />
        <Input type={"password"} placeholder={"パスワード"} />
        <Input type={"password"} placeholder={"確認用パスワード"} />

        <Button type={"submit"}>サインアップ</Button>

        <div className={"flex flex-col items-center"}>
          <p className={"text-sm"}>
            アカウントをお持ちの場合は
            <Link href={getPath.login}>ログイン</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
