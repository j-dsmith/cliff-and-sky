import { EASING } from "@/constants/animations";
import { FC } from "react";
import { AnimationControls, motion, Variants } from "framer-motion";

const AnimatedBorder: FC<{ controls: AnimationControls }> = ({ controls }) => {
  return (
    <motion.div
      className="h-px w-full origin-left bg-black"
      variants={borderVariants}
      initial="initial"
      animate={controls}
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
      delay: 2.1,
      duration: 0.6,
      ease: EASING.easeOutCubic,
    },
  },
};

export default AnimatedBorder;
