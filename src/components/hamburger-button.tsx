import { FC } from "react";
import clsx from "clsx";
import { AnimationControls, motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { EASING, TRANSITION } from "@/constants/animations";
import { cva } from "class-variance-authority";

interface Props {
  theme: "dark" | "light" | null;
  handleClick: () => void;
  controls: AnimationControls;
}

const HamburgerButton: FC<Props> = ({ theme, handleClick, controls }) => {
  const buttonClasses = cva(
    [
      "relative",
      "z-50",
      "flex",
      "h-9",
      "w-20",
      "flex-col",
      "items-center",
      "justify-center",
      "gap-2",
      "rounded-full",
      "md:hidden",
      "will-change-transform",
    ],
    {
      variants: {
        theme: {
          dark: ["bg-white"],
          light: ["bg-black"],
        },
      },
    }
  );

  const lineClasses = cva(
    ["flex", "h-0.5", "w-8", "origin-left", "bg-white", "will-change-transform"],
    {
      variants: {
        theme: {
          dark: ["bg-black"],
          light: ["bg-white"],
        },
      },
    }
  );

  return (
    <motion.button
      className={buttonClasses({ theme })}
      initial="hidden"
      animate={controls}
      variants={btnVariant}
      onClick={handleClick}
      custom={theme}
    >
      <motion.div
        variants={topLineVariant}
        custom={theme}
        className={lineClasses({ theme })}
      ></motion.div>
      <motion.div
        variants={bottomLineVariant}
        custom={theme}
        className={lineClasses({ theme })}
      ></motion.div>
    </motion.button>
  );
};

// Variants
const btnVariant = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ...TRANSITION.genericTextSpring,
      bounce: 0.45,
      delay: 1.5,
      duration: 1.5,
    },
  },
  initial: (theme: "dark" | "light" | null) => ({
    backgroundColor: theme === "light" ? COLORS.black : COLORS.white,
  }),
  open: (theme: "dark" | "light" | null) => ({
    backgroundColor: theme === "light" ? COLORS.white : COLORS.black,
    transition: {
      duration: 0.3,
      ease: EASING.easeInOutCubic,
    },
  }),
  closed: (theme: "dark" | "light" | null) => ({
    backgroundColor: theme === "light" ? COLORS.black : COLORS.white,
    transition: {
      duration: 0.3,
      ease: EASING.easeInOutCubic,
    },
  }),
};

const topLineVariant = {
  initial: (theme: "dark" | "light" | null) => ({
    backgroundColor: theme === "light" ? COLORS.white : COLORS.black,
    rotate: 0,
    y: 0,
  }),
  open: (theme: "dark" | "light" | null) => ({
    backgroundColor: theme === "light" ? COLORS.black : COLORS.white,
    rotate: 25,
    y: -2,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
  closed: (theme: "dark" | "light" | null) => ({
    backgroundColor: theme === "light" ? COLORS.white : COLORS.black,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
};

const bottomLineVariant = {
  ...topLineVariant,
  open: (theme: "dark" | "light" | null) => ({
    ...topLineVariant.open,
    backgroundColor: theme === "light" ? COLORS.black : COLORS.white,
    rotate: -25,
    y: 2,
  }),
};

export default HamburgerButton;
