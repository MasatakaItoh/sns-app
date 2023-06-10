"use client";

import { Box, Flex } from "@chakra-ui/react";

import { Register } from "@/components/Register";

const RegisterPage = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} h={"100vh"}>
      <Box maxW={"480px"} w={"100%"}>
        <Register />
      </Box>
    </Flex>
  );
};

export default RegisterPage;
