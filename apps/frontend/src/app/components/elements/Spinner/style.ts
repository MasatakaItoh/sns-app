import { tv } from "tailwind-variants";

export const spinnerStyles = tv({
  base: "text-gray-200 animate-spin fill-blue-600",
  variants: {
    size: {
      sm: "w-8 h-8",
      md: "w-12 h-12",
    },
  },
});
