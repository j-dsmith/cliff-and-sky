"use client";

import { motion, useInView } from "framer-motion";
import { ProjectsType } from "@/types/sanity/projects";
import { FC, useRef } from "react";
import FeaturedProjectCard from "./components/featured-project-card";
import { EASING } from "@/constants/animations";

interface Props {
  projects: ProjectsType;
}

const ProjectsSection: FC<Props> = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="mt-20 px-8  md:px-16">
      <article className="flex flex-col gap-8 pb-8">
        {/* <p className="flex items-center">
          <span className="mr-2 text-xs">✦</span> Featured Projects
        </p> */}
        <h2 className="relative h-16 overflow-hidden text-6xl uppercase" ref={ref}>
          <motion.span
            className="absolute inline-block h-full w-full origin-left translate-y-full"
            variants={sectionHeaderVariants}
            initial="initial"
            animate={isInView ? "animate" : ""}
          >
            Work
          </motion.span>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, iusto eveniet odio
          doloribus ducimus.
        </p>
      </article>
      <ul className="flex flex-col gap-8">
        {projects.map((project: any) => (
          <li key={project._id}>
            <FeaturedProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

// Animations
const sectionHeaderVariants = {
  initial: {
    opacity: 0,
    y: 100,
    rotate: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: EASING.easeOutCubic,
    },
  },
};

export default ProjectsSection;
