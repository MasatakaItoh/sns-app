"use client";

import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
// import Image from "next/image";
import { FC } from "react";

export const Profile: FC = () => {
  return (
    <Box>
      <Box bgColor={"gray.100"} w={"100%"} h={"200px"}>
        {/*<Image />*/}
      </Box>

      <Box mt={`-${16}`} px={6}>
        <Avatar size={"2xl"} />
      </Box>

      <Stack spacing={2} mt={4} px={3}>
        <Text fontSize={20} fontWeight={700}>
          伊藤
        </Text>

        <Text fontSize={14}>プロフィール文</Text>

        <Stack direction={"row"} spacing={3}>
          <Text fontSize={14}>出身：東京都</Text>
          <Text fontSize={14}>100 フォロー中</Text>
          <Text fontSize={14}>100 フォロワー</Text>
        </Stack>
      </Stack>
    </Box>
  );
};
