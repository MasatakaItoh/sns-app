import { ComponentPropsWithRef } from "react";

import { avatarStyles } from "./style";

export type AvatarProps = ComponentPropsWithRef<"img"> & {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export const Avatar = ({ src, name, size = "md" }: AvatarProps) => {
  return (
    <img
      className={avatarStyles({ size })}
      src={src || "/no_avatar.png"}
      alt={`${name}のアイコン`}
    />
  );
};
