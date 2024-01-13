import { ComponentPropsWithRef } from "react";

import { inputStyles } from "./style";

export type InputProps = ComponentPropsWithRef<"input">;

export const Input = ({ type = "text", ...props }: InputProps) => {
  return <input type={type} className={inputStyles()} {...props} />;
};
