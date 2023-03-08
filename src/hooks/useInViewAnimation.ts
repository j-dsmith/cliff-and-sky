import { AnimationControls, useInView } from "framer-motion";
import { useEffect, useState, RefObject } from "react";

/**
 * Takes a ref and animation controls and starts the animation sequence when the element comes in view
 * @param ref ref for the element to be animated
 * @param controls animation controls for the element(s) to be animated
 * @returns boolean indicating whether the animation has been completed
 */
export const useInViewAnimation = <T extends RefObject<Element>>(
  ref: T,
  controls: AnimationControls
): boolean => {
  const isInView = useInView(ref);
  const [doneAnimating, setDoneAnimating] = useState(false);

  // Start animation sequence when element comes in view
  useEffect(() => {
    const handleInViewAnimation = async (controls: AnimationControls) => {
      // ? animation variants are defined in the component but must always be named "animate"
      await controls.start("animate");

      setDoneAnimating(true);
    };

    if (!doneAnimating && isInView) {
      handleInViewAnimation(controls);
    }
  }, [isInView, doneAnimating, controls]);

  return doneAnimating;
};
