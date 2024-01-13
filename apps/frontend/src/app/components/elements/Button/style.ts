import { tv } from "tailwind-variants";

export const buttonStyles = tv({
  base: "flex items-center border border-transparent font-bold rounded",
  variants: {
    size: {
      sm: "gap-1 py-1 px-2 text-xs",
      md: "gap-2 py-2 px-4 text-sm",
      lg: "gap-3 py-2 px-6 text-md",
    },
    color: {
      primary: "text-blue-400 hover:text-blue-500",
      secondary: "text-gray-400 hover:text-gray-500",
    },
    variant: {
      solid: "text-white hover:text-white",
      outline: "bg-white",
      ghost: "",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "primary",
      class: "bg-blue-400 hover:bg-blue-500",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "bg-gray-400 hover:bg-gray-500",
    },
    {
      variant: "outline",
      color: "primary",
      class: "border-blue-400 hover:border-blue-500",
    },
    {
      variant: "outline",
      color: "secondary",
      class: "border-gray-400 hover:border-gray-500",
    },
  ],
});
