"use client";

import { Button, Heading, FormControl, Icon, Input, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { BsTwitter } from "react-icons/bs";

import { getPath } from "@/utils";

export const Login: FC = () => {
  return (
    <Stack spacing={6} alignItems={"center"} p={12} boxShadow={"lg"}>
      <Icon as={BsTwitter} boxSize={8} />
      <Heading as={"h1"} fontSize={32}>
        SNSにログイン
      </Heading>

      <FormControl>
        <Stack spacing={4}>
          <Input type={"email"} placeholder={"Eメール"} />
          <Input type={"password"} placeholder={"パスワード"} />

          <Button type={"submit"}>ログイン</Button>

          <Stack spacing={1} alignItems={"center"}>
            <Text fontSize={14}>
              パスワードを忘れた方は
              <Link href={getPath.passwordReset} as={NextLink}>
                こちら
              </Link>
            </Text>

            <Text fontSize={14}>
              アカウントをお持ちでない場合は
              <Link href={getPath.register} as={NextLink}>
                登録
              </Link>
            </Text>
          </Stack>
        </Stack>
      </FormControl>
    </Stack>
  );
};
