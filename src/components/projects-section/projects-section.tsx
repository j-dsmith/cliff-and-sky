"use client";

import { useAnimationControls } from "framer-motion";
import { ProjectsType } from "@/types/sanity/projects";
import { FC, useRef } from "react";
import ProjectsSectionHeader from "./projects-section-header";
import ProjectsSectionSubheader from "./projects-section-subheader";
import Spacer from "../spacer";
import ViewAllLink from "./view-all-projects-link";
import ProjectsList from "./projects-list";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

interface Props {
  projects: ProjectsType;
}

const ProjectsSection: FC<Props> = ({ projects }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useInViewAnimation<typeof ref>(ref, controls);

  return (
    <section className="px-6 md:px-16">
      <article ref={ref} className="flex flex-col">
        <ProjectsSectionHeader controls={controls} />
        <ProjectsSectionSubheader controls={controls} />
        <Spacer className="h-4" />
        <ViewAllLink controls={controls} />
        <Spacer className="h-16" />
      </article>
      <ProjectsList projects={projects} />
    </section>
  );
};

export default ProjectsSection;
