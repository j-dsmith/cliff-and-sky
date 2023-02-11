"use client";

import { useState } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";
import { EASING } from "@/constants/animations";
import HamburgerButton from "./hamburger-button";
import MobileNavLinks from "./mobile-nav-links";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navControls = useAnimationControls();

  const handleMenuButtonClick = () => {
    if (isOpen) {
      document.body.classList.remove("fixed");
      navControls.start("closed");
    } else {
      document.body.classList.add("fixed");
      navControls.start("open");
    }
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <article className="isolate z-50">
      <motion.nav
        initial="initial"
        animate={navControls}
        variants={navVariants}
        className="fixed top-0 left-0 right-0 bottom-0"
      >
        <motion.div
          initial="initial"
          variants={overlayVariants}
          animate={navControls}
          className="absolute z-0 h-full w-full origin-top bg-black"
        />
        <MobileNavLinks controls={navControls} />
      </motion.nav>
      <HamburgerButton isOpen={isOpen} handleClick={handleMenuButtonClick} controls={navControls} />
    </article>
  );
};

const navVariants: Variants = {
  initial: {
    visibility: "hidden",
  },
  open: {
    visibility: "visible",
  },
  closed: {
    visibility: "hidden",
    transition: {
      visibility: { delay: 0.6 },
    },
  },
};

const overlayVariants: Variants = {
  initial: {
    scaleY: 0,
    visibility: "hidden",
  },
  open: {
    scaleY: 1,
    visibility: "visible",
    transition: {
      duration: 0.6,
      ease: EASING.easeInOutCubic,
    },
  },
  closed: {
    scaleY: 0,
    visibility: "hidden",
    transition: {
      visibility: { delay: 0.6 },
      duration: 0.6,
      ease: EASING.easeInOutCubic,
    },
  },
};
export default MobileNav;
``;
