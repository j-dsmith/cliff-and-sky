import { FC, useRef } from "react";
import { ProjectType } from "@/types/sanity/projects";
import { HiArrowRight } from "react-icons/hi2";
import { LazyMotion, m, useAnimationControls, Variants } from "framer-motion";
import { EASING, TRANSITION } from "@/constants/animations";
import AnimatedBorder from "@/components/animations/animated-border";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { loadFeatures } from "@/lib/framer";
import FadeIn from "../animations/fade-in";

interface Props {
  project: ProjectType;
  idx: number;
}

const FeaturedProjectCard: FC<Props> = ({ project, idx }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useInViewAnimation<typeof ref>(ref, controls);

  const titleTransition = {
    ...TRANSITION.genericTextSpring,
    delay: 0.3,
    duration: 1.2,
  };

  return (
    <>
      {/* First element gets top border */}
      {idx === 0 ? <AnimatedBorder bgColor="bg-black" controller={controls} /> : null}
      <article ref={ref} className="flex justify-between py-8">
        <FadeIn
          controller={controls}
          className="flex items-baseline gap-2"
          direction="y"
          yStart={20}
          transition={titleTransition}
        >
          <p className="text-xl  uppercase">{project.title}</p>
          <p className="text-sm text-slate-500">{project.category}</p>
        </FadeIn>

        <FadeIn controller={controls} transition={titleTransition} direction="x" xStart={-15}>
          <HiArrowRight className="text-3xl" />
        </FadeIn>
      </article>
      <AnimatedBorder bgColor="bg-black" controller={controls} />
    </>
  );
};

export default FeaturedProjectCard;
