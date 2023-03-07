"use client";

import { AnimationControls, useAnimationControls, useInView } from "framer-motion";
import { ProjectsType } from "@/types/sanity/projects";
import { FC, useEffect, useRef, useState } from "react";
import { EASING } from "@/constants/animations";
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
    <section className="px-6 font-neue md:px-16">
      <article className="flex flex-col gap-2 pb-8">
        <div ref={ref}>
          <ProjectsSectionHeader controls={controls} />
        </div>

        <ProjectsSectionSubheader controls={controls} />
        <ViewAllLink controls={controls} />
      </article>
      <Spacer className="h-16" />
      <ProjectsList projects={projects} controls={controls} />
    </section>
  );
};

export default ProjectsSection;
