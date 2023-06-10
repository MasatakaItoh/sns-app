"use client";

import { Avatar, AvatarBadge, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

type UserProps = {
  children: string;
  id: string;
  icon: string;
};

export const User: FC<UserProps> = ({ children, id, icon }) => {
  return (
    <Link href={id}>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Avatar src={icon} size={"sm"}>
          <AvatarBadge boxSize={"1.1em"} bgColor={"teal.400"} placement={"top-start"} />
        </Avatar>
        <Text>{children}</Text>
      </Stack>
    </Link>
  );
};

export const Users: FC = () => {
  return (
    <Stack spacing={3}>
      <User id={"1"} icon={""}>
        user
      </User>
      <User id={"2"} icon={""}>
        user
      </User>
    </Stack>
  );
};
