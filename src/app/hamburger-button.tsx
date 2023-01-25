"use client";

import { FC, SetStateAction, useState } from "react";

import clsx from "clsx";
import { AnimationControls, motion, useAnimationControls } from "framer-motion";
import { COLORS } from "@/constants/colors";

interface Props {
  isOpen: boolean;
  handleClick: () => void;
  controls: AnimationControls;
}

const HamburgerButton: FC<Props> = ({ isOpen, handleClick, controls }) => {
  return (
    <motion.button
      className={clsx(
        "relative z-50 flex h-9 w-20 flex-col items-center justify-center gap-2 rounded-full md:hidden"
      )}
      initial="initial"
      animate={controls}
      variants={btnVariant}
      onClick={handleClick}
    >
      <motion.div
        variants={topLineVariant}
        className={clsx("flex h-0.5 w-8 origin-left bg-white")}
      ></motion.div>
      <motion.div
        variants={bottomLineVariant}
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
