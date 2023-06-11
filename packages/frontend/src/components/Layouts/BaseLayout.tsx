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
      <Box pl={16} w={"max(20%, 340px)"}>
        <LeftBar />
      </Box>

      <Box flex={1} p={4}>
        {children}
      </Box>

      <Box pr={16} w={"max(20%, 440px)"}>
        <RightBar />
      </Box>
    </Flex>
  );
};
