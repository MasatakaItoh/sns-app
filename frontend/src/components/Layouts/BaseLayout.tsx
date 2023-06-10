"use client";

import { Box, Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import { LeftBar } from "@/components/LeftBar";
import { RightBar } from "@/components/RightBar";

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Flex>
      <Box pl={10} w={"max(20%, 320px)"}>
        <LeftBar />
      </Box>

      <Box flex={1} p={4}>
        {children}
      </Box>

      <Box pr={10} w={"max(20%, 320px)"}>
        <RightBar />
      </Box>
    </Flex>
  );
};
