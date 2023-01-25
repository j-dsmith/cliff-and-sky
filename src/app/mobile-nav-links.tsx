"use client";

import { usePathname } from "next/navigation";
import { AnimationControls, motion } from "framer-motion";

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
    <ul className="relative z-10 mt-36 mb-32 flex flex-col items-center justify-center gap-6 text-xl text-white">
      {navLinks.map(({ name, url }, i) => (
        <li key={name} className="">
          <motion.div variants={linkVariant} animate={controls} className="">
            <Link
              className="rounded-full border-2 border-white py-0.5 px-3 text-3xl font-light uppercase"
              href={url}
            >
              {name}
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  );
};

const linkVariant = {
  initial: { y: 40, opacity: 0 },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: { duration: 0.3, ease: EASING.easeInCubic },
      delay: 0.27,
      duration: 0.6,
      ease: EASING.easeOutCubic,
    },
  },
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
