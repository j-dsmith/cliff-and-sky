import { EASING } from "@/constants/animations";
import { FC } from "react";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";

interface Props {
  trigger: boolean;
  bgColor: string;
}

const AnimatedBorder: FC<Props> = ({ trigger, bgColor }) => {
  return (
    <motion.div
      className={clsx("h-px w-full origin-left", bgColor)}
      variants={borderVariants}
      initial="initial"
      animate={trigger && "animate"}
    />
  );
};

const borderVariants: Variants = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: EASING.easeOutCubic,
    },
  },
};

export default AnimatedBorder;
