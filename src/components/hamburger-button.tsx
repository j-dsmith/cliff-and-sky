import { FC } from "react";
import clsx from "clsx";
import { AnimationControls, motion, useAnimationControls } from "framer-motion";
import { COLORS } from "@/constants/colors";

interface Props {
  isOpen: boolean;
  theme: "dark" | "light" | null;
  handleClick: () => void;
  controls: AnimationControls;
}

const HamburgerButton: FC<Props> = ({ isOpen, theme, handleClick, controls }) => {
  const isLineVariant = (
    variant: typeof btnVariant | typeof topLineVariant
  ): variant is typeof btnVariant => {
    return (variant as typeof topLineVariant).initial.y !== undefined;
  };

  const setVariantColors = (theme: "dark" | "light" | null, variant: typeof btnVariant) => {
    const dark = {
      ...variant,
      initial: { ...variant.initial, backgroundColor: COLORS.white },
      open: { ...variant.open, backgroundColor: COLORS.black },
      closed: { ...variant.closed, backgroundColor: COLORS.white },
    };
    const light = {
      ...variant,
      initial: { ...variant.initial, backgroundColor: COLORS.black },
      open: { ...variant.open, backgroundColor: COLORS.white },
      closed: { ...variant.closed, backgroundColor: COLORS.black },
    };
    if (isLineVariant(variant)) {
      return theme === "dark" ? light : dark;
    }
    return theme === "dark" ? dark : light;
  };
  return (
    <motion.button
      className={clsx(
        "relative z-50 flex h-9 w-20 flex-col items-center justify-center gap-2 rounded-full md:hidden"
      )}
      initial="initial"
      animate={controls}
      variants={setVariantColors(theme, btnVariant)}
      onClick={handleClick}
    >
      <motion.div
        variants={setVariantColors(theme, topLineVariant)}
        className={clsx("flex h-0.5 w-8 origin-left bg-white")}
      ></motion.div>
      <motion.div
        variants={setVariantColors(theme, bottomLineVariant)}
        className={clsx("flex h-0.5 w-8 origin-left bg-white")}
      ></motion.div>
    </motion.button>
  );
};

// Variants
const btnVariant = {
  initial: {
    backgroundColor: COLORS.black,
  },
  open: {
    backgroundColor: COLORS.white,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  closed: {
    backgroundColor: COLORS.black,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const topLineVariant = {
  initial: {
    backgroundColor: COLORS.white,
    rotate: 0,
    y: 0,
  },
  open: {
    backgroundColor: COLORS.black,
    rotate: 25,
    y: -2,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  closed: {
    backgroundColor: COLORS.white,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const bottomLineVariant = {
  ...topLineVariant,
  open: { ...topLineVariant.open, rotate: -25, y: 2 },
};

export default HamburgerButton;
