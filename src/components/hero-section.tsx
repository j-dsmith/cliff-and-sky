"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import heroSrc from "@/assets/hero.png";
import { motion, useAnimationControls } from "framer-motion";
import { EASING } from "@/constants/animations";
import { COLORS } from "@/constants/colors";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const HeroSection = () => {
  const ref = useRef(null);
  const controls = useAnimationControls();

  const finished = useInViewAnimation<typeof ref>(ref, controls);

  if (finished) {
    document.body.classList.remove("fixed");
  }

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={controls}
      className="isolate flex h-[calc(100vh-80px)] flex-col items-center justify-end px-6"
    >
      <motion.h1
        className="relative z-50 translate-y-8 text-center font-walsheim text-8xl uppercase"
        variants={headerVariants}
      >
        <span>Cliff</span>
        <br />
        <span className="">& Sky</span>
      </motion.h1>
      <div className="relative z-10 overflow-y-auto md:px-16">
        <Image
          src={heroSrc}
          alt="hero image"
          width={5184}
          height={3456}
          className="h-[500px] object-cover"
        />

        <div className="absolute top-0 left-8 h-full w-[calc(100%-64px)]"></div>
      </div>
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 z-40 origin-top bg-black"
        variants={overlayVariants}
      />
    </motion.section>
  );
};

// Animations
const headerVariants = {
  initial: {
    opacity: 0,
    color: COLORS.white,
  },
  animate: {
    opacity: 1,
    color: COLORS.black,
    transition: {
      color: { delay: 0.6, duration: 0.15, ease: "linear" },
      duration: 0.6,
      ease: EASING.easeOutCubic,
    },
  },
};

const overlayVariants = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 0,
    transition: {
      delay: 0.6,
      duration: 0.6,
      ease: EASING.easeOutCubic,
    },
  },
};
export default HeroSection;
