import { EASING, TRANSITION } from "@/constants/animations";
import { FC } from "react";
import { LazyMotion, m, Transition, Variants } from "framer-motion";
import clsx from "clsx";
import { loadFeatures } from "@/lib/framer";
import { AnimationController } from "@/types/sharedAnimations";
import { setAnimationController } from "@/lib/setAnimationController";

interface Props {
  controller: AnimationController;
  bgColor: string;
  transition?: Transition;
}

const AnimatedBorder: FC<Props> = ({ controller, bgColor, transition }) => {
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
        className={clsx("h-px w-full origin-left", bgColor)}
        variants={borderVariants}
        initial="initial"
        animate={setAnimationController(controller)}
      />
    </LazyMotion>
  );
};

export default AnimatedBorder;
