"use client";

import { Input, InputLeftElement, InputGroup, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Users } from "@/components/Users";

export const RightBar: FC = () => {
  return (
    <Stack spacing={8} px={6} py={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch />
        </InputLeftElement>
        <Input placeholder={"キーワードで検索"} />
      </InputGroup>

      <Stack spacing={4}>
        <Text fontWeight={700}>オンラインの友達</Text>
        <Users />
      </Stack>
    </Stack>
  );
};
