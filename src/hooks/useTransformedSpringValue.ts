import { useTransform, useSpring, MotionValue } from "framer-motion";

/**
 * Takes a motion value and transforms it to a spring value based on
 * the output range and spring config provided
 * @param motionValue motion value to be transformed
 * @param outputRange output range for the transform
 * @param springConfig config for the spring animation
 * @returns spring motion value
 */
export const useTransformedSpringValue = (
  motionValue: MotionValue<number>,
  outputRange: number[],
  springConfig: { damping: number; mass: number }
): MotionValue<number> => {
  return useSpring(useTransform(motionValue, [0, 1], outputRange), springConfig);
};
