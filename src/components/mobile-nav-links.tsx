import { usePathname } from "next/navigation";
import { AnimationControls, motion, Variants } from "framer-motion";

import { navLinks } from "@/data/nav-links";
import { EASING } from "@/constants/animations";
import Link from "next/link";
import { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface Props extends Required<Pick<NavVariantProps, "theme">> {
  controls: AnimationControls;
  theme: "dark" | "light" | null;
}

type NavVariantProps = VariantProps<typeof navClasses>;

const navClasses = cva(
  [
    "relative",
    "z-10",
    "mt-36",
    "mb-32",
    "flex",
    "flex-col",
    "justify-center",
    "gap-6",
    "px-16",
    "text-xl",
  ],
  {
    variants: {
      theme: {
        dark: ["text-black"],
        light: ["text-white"],
      },
    },
  }
);

const MobileNavLinks: FC<Props> = ({ controls, theme }) => {
  return (
    <ul className={navClasses({ theme })}>
      {navLinks.map(({ name, url }, i) => (
        <li key={name} className="relative h-16 overflow-hidden">
          <motion.div
            initial="initial"
            variants={linkVariant}
            animate={controls}
            custom={i}
            className="will-change-transform"
          >
            <Link className="text-6xl uppercase" href={url}>
              {name}
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  );
};

// Animations

const linkVariant: Variants = {
  initial: { y: 125, opacity: 0, rotate: 6 },
  open: (i: number) => ({
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.9,
      ease: EASING.easeOutCubic,
      opacity: { duration: 0.6, ease: EASING.easeInCubic },
    },
  }),
  closed: {
    y: 125,
    rotate: 6,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: EASING.easeInCubic,
    },
  },
};

export default MobileNavLinks;
