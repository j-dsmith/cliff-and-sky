"use client";

import { useState } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";
import { EASING } from "@/constants/animations";
import HamburgerButton from "./hamburger-button";
import MobileNavLinks from "./mobile-nav-links";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayControls = useAnimationControls();
  const btnControls = useAnimationControls();
  const linkControls = useAnimationControls();

  const handleMenuButtonClick = () => {
    if (isOpen) {
      overlayControls.start("closed");
      btnControls.start("closed");
      linkControls.start("closed");
    } else {
      overlayControls.start("open");
      btnControls.start("open");
      linkControls.start("open");
    }
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <article className="isolate">
      <nav className="fixed top-0 left-0 right-0">
        <motion.div
          initial="initial"
          variants={overlayVariants}
          animate={overlayControls}
          className="absolute z-0 h-full w-full origin-top bg-black"
        />
        <MobileNavLinks controls={linkControls} />
      </nav>
      <HamburgerButton isOpen={isOpen} handleClick={handleMenuButtonClick} controls={btnControls} />
    </article>
  );
};

const overlayVariants: Variants = {
  initial: {
    scaleY: 0,
  },
  open: {
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: EASING.easeInOutCubic,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      duration: 0.6,
      ease: EASING.easeInOutCubic,
    },
  },
};
export default MobileNav;
``;
