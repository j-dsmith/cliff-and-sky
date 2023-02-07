import clsx from "clsx";
import { FC } from "react";

interface Props {
  className: string;
}

const Spacer: FC<Props> = ({ className }) => {
  return <div className={clsx(className, "w-full")} />;
};
export default Spacer;
