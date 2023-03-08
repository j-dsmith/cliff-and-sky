import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { ProjectsType, ProjectType } from "@/types/sanity/projects";
import { AnimationControls, useAnimationControls } from "framer-motion";
import { FC, useRef } from "react";
import AnimatedBorder from "./animated-border";
import FeaturedProjectCard from "./featured-project-card";

interface Props {
  projects: ProjectsType;
}

const ProjectsList: FC<Props> = ({ projects }) => {
  const renderProjectCards = () => {
    return projects.map((project: ProjectType, idx: number) => (
      <li key={project._id}>
        <FeaturedProjectCard idx={idx} project={project} />
      </li>
    ));
  };
  return <ul>{renderProjectCards()}</ul>;
};

export default ProjectsList;
