"use client";

import Image from "next/image";
import { useEffect } from "react";
import heroSrc from "@/assets/hero.png";
import { m, LazyMotion, useAnimationControls, domAnimation, Variants } from "framer-motion";
import { EASING, TRANSITION } from "@/constants/animations";
import { COLORS } from "@/constants/colors";

const HeroSection = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const runInitAnimation = async () => {
      await controls.start("animate");
      document.body.classList.remove("fixed");
    };
    runInitAnimation();
  }, [controls]);

  return (
    <section className="isolate flex h-[calc(100vh-80px)] flex-col items-center justify-end bg-white px-6">
      <LazyMotion features={domAnimation}>
        <m.h1
          className="relative z-50 text-center font-walsheim text-8xl uppercase text-white mix-blend-difference"
          variants={headerVariants}
          initial="initial"
          animate={controls}
        >
          <span className="">Cliff</span>
          <br />
          <span className="">& Sky</span>
        </m.h1>
      </LazyMotion>

      <div className="relative z-10 overflow-y-auto md:px-16">
        <Image
          src={heroSrc}
          alt="hero image"
          width={5184}
          height={3456}
          className="h-[500px] object-cover"
          priority={true}
        />

        <div className="absolute top-0 left-8 h-full w-[calc(100%-64px)]"></div>
      </div>
      <LazyMotion features={domAnimation}>
        <m.div
          className="bg-black will-change-transform"
          variants={overlayVariants}
          initial="initial"
          animate={controls}
          onAnimationEnd={() => document.body.classList.remove("fixed")}
        />
      </LazyMotion>
    </section>
  );
};

// Animations
const headerVariants = {
  initial: {
    opacity: 0,
    y: 52,
  },
  animate: {
    opacity: 1,
    y: 36,
    transition: {
      ...TRANSITION.genericTextSpring,
      duration: 1.2,
    },
  },
};

const overlayVariants: Variants = {
  initial: {
    scaleY: 1,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    originX: 0,
    originY: 0,
    zIndex: 40,
  },
  animate: {
    scaleY: 0,
    transition: {
      ...TRANSITION.genericTextSpring,
      delay: 0.6,
      duration: 1.8,
    },
  },
};
export default HeroSection;
