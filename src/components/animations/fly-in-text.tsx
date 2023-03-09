import { forwardRef, FC } from "react";
import { EASING, TRANSITION } from "@/constants/animations";
import { AnimationControls, LazyMotion, m } from "framer-motion";
import clsx from "clsx";
import { loadFeatures } from "@/lib/framer";
import { setAnimationController } from "@/lib/setAnimationController";
import { AnimationController } from "@/types/sharedAnimations";

interface Props {
  text: string;
  controller: AnimationController;
  className?: string;
}

const FlyInText = forwardRef<HTMLDivElement, Props>(({ text, className, controller }, ref) => {
  const textClasses =
    "absolute inline-block h-full w-full origin-left leading-none will-change-transform";
  return (
    <div className="relative overflow-hidden" ref={ref}>
      <LazyMotion features={loadFeatures}>
        <m.span
          className={clsx(textClasses, className)}
          variants={textVariants}
          initial="initial"
          animate={setAnimationController(controller)}
        >
          {text}
        </m.span>
      </LazyMotion>
      <p className={clsx("invisible py-1 leading-none", className)}>{text}</p>
    </div>
  );
});

FlyInText.displayName = "FlyInText";

const textVariants = {
  initial: {
    opacity: 0,
    y: 100,
    rotate: 6,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      ...TRANSITION.genericTextSpring,
      duration: 2.1,
    },
  },
};
export default FlyInText;
