import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { HiArrowRight } from "react-icons/hi2";

interface Props {
  url: string;
  className?: string;
  outline?: boolean;
}

const ArrowLink: FC<Props> = ({ url, className, outline }) => {
  return (
    <Link
      href={url}
      className={clsx(
        "grid place-items-center",
        outline && "rounded-full border border-white",
        className
      )}
    >
      <HiArrowRight />
    </Link>
  );
};
export default ArrowLink;
