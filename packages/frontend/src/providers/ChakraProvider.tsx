"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider as Provider } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type ChakraProviderProps = {
  children: ReactNode;
};

export const ChakraProvider: FC<ChakraProviderProps> = ({ children }) => {
  return (
    <CacheProvider>
      <Provider>{children}</Provider>
    </CacheProvider>
  );
};
