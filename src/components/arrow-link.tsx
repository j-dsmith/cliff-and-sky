import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import { HiArrowRight } from "react-icons/hi2";

interface Props extends HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof iconButtonClasses> {
  url: string;
  theme?: "dark" | "light";
  size?: "large";
  outline?: boolean;
}

const iconButtonClasses = cva(["grid", "place-items-center border"], {
  variants: {
    theme: {
      dark: ["border-white", "text-white"],
      light: ["border-black", "text-black"],
    },
    size: {
      large: ["h-14", "w-14", "text-3xl"],
    },
    outline: {
      true: ["border", "rounded-full"],
    },
  },
  defaultVariants: {
    theme: "dark",
    size: "large",
    outline: true,
  },
});

const ArrowLink: FC<Props> = ({ url, outline, theme, size }) => {
  return (
    <Link href={url} className={iconButtonClasses({ outline, theme, size })}>
      <HiArrowRight />
    </Link>
  );
};
export default ArrowLink;
