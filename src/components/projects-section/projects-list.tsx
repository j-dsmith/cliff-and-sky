import { EASING } from "@/constants/animations";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { ProjectsType, ProjectType } from "@/types/sanity/projects";
import { AnimationControls, motion, useInView, Variants } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import AnimatedBorder from "./animated-border";
import FeaturedProjectCard from "./featured-project-card";

interface Props {
  projects: ProjectsType;
  controls: AnimationControls;
}

const ProjectsList: FC<Props> = ({ projects, controls }) => {
  const ref = useRef<HTMLUListElement>(null);

  useInViewAnimation<typeof ref>(ref, controls);

  const renderProjectCards = () => {
    return projects.map((project: ProjectType, idx: number) => (
      <li key={project._id}>
        <FeaturedProjectCard controls={controls} idx={idx} project={project} />
      </li>
    ));
  };
  return (
    <ul className="" ref={ref}>
      <AnimatedBorder controls={controls} />
      {renderProjectCards()}
    </ul>
  );
};

export default ProjectsList;
