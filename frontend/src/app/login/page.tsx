"use client";

import { Box, Flex } from "@chakra-ui/react";

import { Login } from "@/components/Login";

const LoginPage = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} h={"100vh"}>
      <Box maxW={"480px"} w={"100%"}>
        <Login />
      </Box>
    </Flex>
  );
};

export default LoginPage;
