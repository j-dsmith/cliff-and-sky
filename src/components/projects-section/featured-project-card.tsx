import { FC, useRef } from "react";
import { ProjectType } from "@/types/sanity/projects";
import { HiArrowRight } from "react-icons/hi2";
import { AnimationControls, motion, useAnimationControls, Variants } from "framer-motion";
import { EASING } from "@/constants/animations";
import AnimatedBorder from "./animated-border";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

interface Props {
  project: ProjectType;
  idx: number;
}

const FeaturedProjectCard: FC<Props> = ({ project, idx }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const finished = useInViewAnimation<typeof ref>(ref, controls);

  return (
    <>
      {/* First element gets top border */}
      {idx === 0 ? <AnimatedBorder finished={finished} /> : null}
      <article ref={ref} className="flex justify-between py-8">
        <motion.div
          className="flex items-baseline gap-2 will-change-transform"
          initial="initial"
          animate={controls}
          variants={titleVariants}
        >
          <p className="text-xl  uppercase">{project.title}</p>
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
      <AnimatedBorder finished={finished} />
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
      duration: 0.6,
      ease: EASING.easeOutCubic,
    },
  },
};

export default FeaturedProjectCard;
