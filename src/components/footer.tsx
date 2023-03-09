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
import { EASING, TRANSITION } from "@/constants/animations";
import FlyInText from "@/components/animations/fly-in-text";
import FadeIn from "@/components/animations/fade-in";

import Spacer from "./spacer";
import AnimatedBorder from "./animations/animated-border";
import AnimatedSectionHeader from "./animations/animated-section-header";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  useInViewAnimation<typeof contentRef>(contentRef, controls);

  const fadeTransition = {
    ...TRANSITION.genericTextSpring,
    duration: 2.1,
  };

  const borderTransition = {
    ...TRANSITION.genericTextSpring,
    delay: 1.2,
    duration: 1.2,
  };

  const fadeInStart = 20;

  const headerSections = ["Design", "Idea?"];
  const headerConfig = { headerSections };
  const linkConfig = { url: "/contact", label: "Let's Connect!" };

  return (
    <section className={footerClasses({ theme })}>
      <AnimatedSectionHeader headerConfig={headerConfig} linkConfig={linkConfig} theme={theme} />
      <article ref={contentRef}>
        {/* Nav Links */}
        <FadeIn
          transition={fadeTransition}
          direction="y"
          yStart={fadeInStart}
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
        <AnimatedBorder controller={controls} bgColor="bg-white" transition={borderTransition} />
        {/* Social Links */}
        <Spacer className="h-8" />
        <FadeIn
          transition={fadeTransition}
          direction="y"
          yStart={fadeInStart}
          controller={controls}
        >
          <div className="mt-4 mb-8 flex gap-4">
            {socialLinks.map((link) => (
              <SocialLink key={link.name} link={link} />
            ))}
          </div>
        </FadeIn>
        {/* Acknowledgement */}
        <Spacer className="h-8" />
        <FadeIn
          transition={fadeTransition}
          direction="y"
          yStart={fadeInStart}
          controller={controls}
        >
          <p className="text-sm">
            I respectfully acknowledge that I create on the traditional and ancestral homelands of
            the Očhéthi Šakówiŋ (Sioux Nation), and Wahpekute (Dakota) people.
          </p>
        </FadeIn>
      </article>
    </section>
  );
};

export default Footer;
