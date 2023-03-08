"use client";

import { FC, useRef } from "react";
import { navLinks } from "@/data/nav-links";
import { socialLinks } from "@/data/social-links";
import Link from "next/link";
import ArrowLink from "./arrow-link";
import SocialLink from "./social-link";
import { cva } from "class-variance-authority";
import { motion, useAnimationControls } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { EASING } from "@/constants/animations";
import FlyInText from "@/components/animations/fly-in-text";
import FadeIn from "@/components/animations/fade-in";

import Spacer from "./spacer";
import AnimatedBorder from "./animations/animated-border";

const footerClasses = cva(["flex", "flex-col", "justify-center", "gap-1", "px-6", "py-32"], {
  variants: {
    theme: {
      dark: ["text-white", "bg-black"],
      light: ["text-black", "bg-white"],
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

const Footer: FC<{ theme: "dark" | "light" }> = ({ theme }) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const controls = useAnimationControls();
  const finished = useInViewAnimation<typeof ref>(ref, controls);
  console.log(finished);
  const fadeTransition = {
    duration: 1.2,
    ease: EASING.easeOutCubic,
    opacity: { duration: 0.9, ease: EASING.easeInCubic },
  };

  const fadeInStart = 50;

  return (
    <section className={footerClasses({ theme })}>
      {/* <p className="text-4xl font-semibold">Design Idea?</p> */}
      <FlyInText
        ref={ref}
        text="Design Idea?"
        controls={controls}
        className="text-4xl font-semibold"
      />
      <FadeIn direction="x" xStart={-30} transition={fadeTransition} controller={finished}>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-light uppercase">Let&apos;s Connect!</p>
          <ArrowLink url="/contact" className="h-14 w-14 text-3xl" outline={true} />
        </div>
      </FadeIn>
      {/* Nav Links */}
      <FadeIn
        ref={contentRef}
        direction="y"
        yStart={fadeInStart}
        transition={fadeTransition}
        controller={controls}
      >
        <ul className="mt-8 flex items-center justify-between will-change-transform">
          {navLinks.map(({ name, url }) => (
            <li key={name}>
              <Link href={url} className="uppercase">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </FadeIn>
      <Spacer className="h-8" />
      <AnimatedBorder trigger={finished} bgColor="bg-white" />
      {/* Social Links */}
      <FadeIn
        ref={contentRef}
        direction="y"
        yStart={fadeInStart}
        transition={fadeTransition}
        controller={controls}
      >
        <div className="mt-4 mb-8 flex gap-4">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} link={link} />
          ))}
        </div>
      </FadeIn>

      {/* Acknowledgement */}
      <FadeIn
        ref={contentRef}
        direction="y"
        yStart={fadeInStart}
        transition={fadeTransition}
        controller={controls}
      >
        <p className="text-xs">
          I respectfully acknowledge that I create on the traditional and ancestral homelands of the
          Očhéthi Šakówiŋ (Sioux Nation), and Wahpekute (Dakota) people.
        </p>
      </FadeIn>
    </section>
  );
};

export default Footer;
