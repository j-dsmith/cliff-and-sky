"use client";

import Image from "next/image";
import hero from "@/assets/hero.jpg";
import Spacer from "./spacer";
import { motion, Variants } from "framer-motion";
import { EASING } from "@/constants/animations";

const HeroBanner = () => {
  return (
    <article className="isolate flex h-full flex-col justify-end pt-16 pb-8">
      <h1 className="relative z-10 text-center text-6xl  leading-none">Cliff & Sky</h1>
      {/* <Spacer className="h-14" /> */}
      <div className="relative max-h-[450px] w-full flex-1">
        <Image alt="mountain" src={hero} width={5364} className="h-full object-cover" />
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex-1 origin-bottom bg-white"
          initial="initial"
          animate="animate"
          variants={heroImageVariants}
        />
      </div>
    </article>
  );
};

// Animation
const heroImageVariants: Variants = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 0,
    transition: {
      duration: 1.2,
      delay: 0.1,
      ease: EASING.easeInOutCubic,
    },
  },
};

export default HeroBanner;
