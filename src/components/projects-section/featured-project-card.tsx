import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { ProjectType } from "@/types/sanity/projects";
import { HiArrowRight } from "react-icons/hi2";
import { AnimationControls, motion, Variants } from "framer-motion";
import { EASING } from "@/constants/animations";
import AnimatedBorder from "./animated-border";

interface Props {
  project: ProjectType;
  controls: AnimationControls;
  idx: number;
}

const FeaturedProjectCard: FC<Props> = ({ project, controls, idx }) => {
  return (
    <>
      <article className="flex justify-between py-8 font-sans">
        <motion.div
          className="flex items-baseline gap-2 will-change-transform"
          initial="initial"
          animate={controls}
          variants={titleVariants}
        >
          <p className="text-xl font-thin uppercase">{project.title}</p>
          <p className="text-sm text-slate-500">{project.category}</p>
        </motion.div>
        <motion.div
          className="will-change-transform"
          initial="initial"
          variants={iconVariants}
          animate={controls}
          custom={idx}
        >
          <HiArrowRight className="text-3xl" />
        </motion.div>
      </article>
      <AnimatedBorder controls={controls} />
    </>
  );
};

// Animations

const titleVariants: Variants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.6,
      ease: EASING.easeOutCubic,
    },
  },
};

const iconVariants: Variants = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
      duration: 0.3,
      ease: EASING.easeOutCubic,
    },
  },
};

export default FeaturedProjectCard;
