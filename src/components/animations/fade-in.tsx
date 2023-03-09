import { EASING, TRANSITION } from "@/constants/animations";
import { loadFeatures } from "@/lib/framer";
import { setAnimationController } from "@/lib/setAnimationController";
import { AnimationController } from "@/types/sharedAnimations";
import clsx from "clsx";
import { LazyMotion, m, Transition } from "framer-motion";
import { forwardRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  controller: AnimationController;
  direction: "x" | "y";
  xStart?: number;
  yStart?: number;
  transition?: Transition;
  className?: string;
}

const FadeIn = forwardRef<HTMLDivElement, Props>(
  ({ children, direction, xStart, yStart, transition, controller, className }, ref) => {
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
          ...TRANSITION.genericTextSpring,
          delay: 0.9,
          duration: 1.5,
        },
      },
    };

    return (
      <LazyMotion features={loadFeatures}>
        <m.div
          ref={ref}
          className={clsx("will-change-transform", className)}
          initial="initial"
          animate={setAnimationController(controller)}
          variants={wrapperVariants}
        >
          {children}
        </m.div>
      </LazyMotion>
    );
  }
);

FadeIn.displayName = "FadeIn";

export default FadeIn;
