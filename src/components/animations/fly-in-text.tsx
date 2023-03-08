import { forwardRef, FC } from "react";
import { EASING } from "@/constants/animations";
import { AnimationControls, motion } from "framer-motion";
import clsx from "clsx";

interface Props {
  text: string;
  controls: AnimationControls;
  className?: string;
}

const FlyInText = forwardRef<HTMLDivElement, Props>(({ text, className, controls }, ref) => {
  const textClasses =
    "absolute inline-block h-full w-full origin-left leading-none will-change-transform";
  return (
    <div className="relative overflow-hidden" ref={ref}>
      <motion.span
        className={clsx(textClasses, className)}
        variants={textVariants}
        initial="initial"
        animate={controls}
      >
        {text}
      </motion.span>
      <p className={clsx("invisible py-1 leading-none", className)}>{text}</p>
    </div>
  );
});

FlyInText.displayName = "FlyInText";

const textVariants = {
  initial: {
    opacity: 0,
    y: 125,
    rotate: 6,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: EASING.easeOutCubic,
      opacity: { duration: 0.6, ease: EASING.easeInCubic },
    },
  },
};
export default FlyInText;
