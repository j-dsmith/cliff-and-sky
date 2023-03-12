import { EASING, TRANSITION } from "@/constants/animations";
import { FC } from "react";
import { LazyMotion, m, Transition, Variants } from "framer-motion";
import clsx from "clsx";
import { loadFeatures } from "@/lib/framer";
import { AnimationController } from "@/types/sharedAnimations";
import { setAnimationController } from "@/lib/setAnimationController";
import { cva } from "class-variance-authority";

interface Props {
  controller: AnimationController;
  theme: "dark" | "light";
  transition?: Transition;
}

const borderClassVariants = cva(["h-px", "w-full", "origin-left"], {
  variants: {
    theme: {
      dark: ["bg-white"],
      light: ["bg-black"],
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

const AnimatedBorder: FC<Props> = ({ controller, theme, transition }) => {
  const borderVariants: Variants = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: transition || {
        ...TRANSITION.genericTextSpring,
        delay: 0.9,
        duration: 1.2,
      },
    },
  };
  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        className={borderClassVariants({ theme })}
        variants={borderVariants}
        initial="initial"
        animate={setAnimationController(controller)}
      />
    </LazyMotion>
  );
};

export default AnimatedBorder;
