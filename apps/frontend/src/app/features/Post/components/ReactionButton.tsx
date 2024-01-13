import { ReactElement } from "react";

import { Button, ButtonProps } from "@components/elements";

type ReactionButtonProps = ButtonProps & {
  icon: ReactElement;
};

export const ReactionButton = ({ children, icon, ...props }: ReactionButtonProps) => {
  return (
    <Button size={"sm"} variant={"ghost"} leftIcon={icon} {...props}>
      {children}
    </Button>
  );
};
