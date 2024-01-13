import Link from "next/link";
import { FC } from "react";
import { BsTwitter } from "react-icons/bs";

import { Button, Input } from "@components/elements";
import { getPath } from "@utils/getPath";

export const Login: FC = () => {
  return (
    <div className={"grid gap-6"}>
      <div className={"flex flex-col items-center"}>
        <BsTwitter className={"w-10 h-10"} />
        <h1 className={"text-3xl mt-4"}>ログイン</h1>
      </div>

      <div className={"grid gap-2 mt-4"}>
        <Input type={"email"} placeholder={"Eメール"} />
        <Input type={"password"} placeholder={"パスワード"} />

        <Button type={"submit"}>ログイン</Button>

        <div className={"flex flex-col items-center gap-2"}>
          <p className={"text-sm"}>
            パスワードを忘れた方は
            <Link href={getPath.passwordReset}>こちら</Link>
          </p>
          <p className={"text-sm"}>
            アカウントをお持ちでない場合は
            <Link href={getPath.register}>登録</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
