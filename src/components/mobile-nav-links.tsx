"use client";

import { usePathname } from "next/navigation";
import { AnimationControls, motion, Variants } from "framer-motion";

import { navLinks } from "@/data/nav-links";
import { EASING } from "@/constants/animations";
import Link from "next/link";
import { FC } from "react";

interface Props {
  controls: AnimationControls;
}

const MobileNavLinks: FC<Props> = ({ controls }) => {
  const pathname = usePathname();

  return (
    <motion.ul
      variants={listVariant}
      className="relative z-10 mt-36 mb-32 flex flex-col items-center justify-center gap-6 text-xl text-white"
    >
      {navLinks.map(({ name, url }, i) => (
        <li key={name} className="">
          <motion.div
            initial="initial"
            variants={linkVariant}
            animate={controls}
            custom={i}
            className=""
          >
            <Link
              className="rounded-full border-2 border-white py-0.5 px-3 text-3xl font-light uppercase"
              href={url}
            >
              {name}
            </Link>
          </motion.div>
        </li>
      ))}
    </motion.ul>
  );
};

// Animations

const getDelay = (i: number) => {
  return i === 0 ? 0.27 : i === 1 ? 0.34 : 0.41;
};
const listVariant: Variants = {
  initial: {},
  open: {
    transition: {
      staggerChildren: 1,
    },
  },
  closed: {},
};

const linkVariant: Variants = {
  initial: { y: 40, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: getDelay(i),
      duration: 0.6,
      ease: EASING.easeOutCubic,
      opacity: { duration: 0.3, ease: EASING.easeInCubic },
    },
  }),
  closed: {
    y: 40,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: EASING.easeInCubic,
    },
  },
};
export default MobileNavLinks;
