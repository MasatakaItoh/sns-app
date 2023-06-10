"use client";

import {
  Button,
  Heading,
  Flex,
  FormControl,
  Icon,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { BsTwitter } from "react-icons/bs";

import { getPath } from "@/utils";

export const Register: FC = () => {
  return (
    <Stack spacing={6} alignItems={"center"} p={12} boxShadow={"lg"}>
      <Icon as={BsTwitter} boxSize={8} />
      <Heading as={"h1"} fontSize={32}>
        アカウント作成
      </Heading>

      <FormControl>
        <Stack spacing={4}>
          <Input placeholder={"ユーザー名"} />
          <Input type={"email"} placeholder={"Eメール"} />
          <Input type={"password"} placeholder={"パスワード"} />
          <Input type={"password"} placeholder={"確認用パスワード"} />

          <Button type={"submit"}>サインアップ</Button>

          <Flex justifyContent={"center"}>
            <Text fontSize={14}>
              アカウントをお持ちの場合は
              <Link href={getPath.login} as={NextLink}>
                ログイン
              </Link>
            </Text>
          </Flex>
        </Stack>
      </FormControl>
    </Stack>
  );
};
