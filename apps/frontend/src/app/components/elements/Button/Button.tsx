import { ComponentPropsWithRef, ReactElement } from "react";

import { buttonStyles } from "./style";

export type ButtonProps = Omit<ComponentPropsWithRef<"button">, "color"> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  leftIcon?: ReactElement;
};

export const Button = ({
  children,
  type = "button",
  size = "md",
  color = "primary",
  variant = "solid",
  leftIcon,
  ...props
}: ButtonProps) => {
  return (
    <button type={type} className={buttonStyles({ size, color, variant })} {...props}>
      {leftIcon}
      {children}
    </button>
  );
};
