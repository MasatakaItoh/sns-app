import { tv } from "tailwind-variants";

export const avatarStyles = tv({
  base: "rounded-full bg-white",
  variants: {
    size: {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-28 h-28",
    },
  },
});
