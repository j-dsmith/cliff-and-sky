import { EASING } from "@/constants/animations";
import { FC } from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  finished: boolean;
}

const AnimatedBorder: FC<Props> = ({ finished }) => {
  return (
    <motion.div
      className="h-px w-full origin-left bg-black"
      variants={borderVariants}
      initial="initial"
      animate={finished && "animate"}
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
