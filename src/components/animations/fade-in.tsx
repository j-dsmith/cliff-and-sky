import { EASING } from "@/constants/animations";
import { AnimationControls, motion, Transition } from "framer-motion";
import { FC, forwardRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  controller: boolean | AnimationControls;
  direction: "x" | "y";
  xStart?: number;
  yStart?: number;
  transition?: Transition;
}

const FadeIn = forwardRef<HTMLDivElement, Props>(
  ({ children, direction, xStart, yStart, transition, controller }, ref) => {
    const wrapperVariants = {
      initial: {
        opacity: 0,
        x: direction === "x" ? xStart || -20 : 0,
        y: direction === "y" ? yStart || 50 : 0,
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { ...transition } || {
          delay: 0.9,
          duration: 1.5,
          ease: EASING.easeOutCubic,
        },
      },
    };

    const setAnimationControls = (controller: boolean | AnimationControls) => {
      if (typeof controller === "boolean") {
        return controller ? "animate" : "initial";
      }
      return controller;
    };

    return (
      <motion.div
        ref={ref}
        className="will-change-transform"
        initial="initial"
        animate={setAnimationControls(controller)}
        variants={wrapperVariants}
      >
        {children}
      </motion.div>
    );
  }
);

FadeIn.displayName = "FadeIn";

export default FadeIn;
