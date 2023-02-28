"use client";

import { useInView } from "framer-motion";
import { ProjectsType } from "@/types/sanity/projects";
import { FC, useRef, useState } from "react";
import { EASING } from "@/constants/animations";
import ProjectsSectionHeader from "./projects-section-header";
import ProjectsSectionSubheader from "./projects-section-subheader";
import Spacer from "../spacer";
import ViewAllLink from "./view-all-projects-link";
import ProjectsList from "./projects-list";

interface Props {
  projects: ProjectsType;
}

const ProjectsSection: FC<Props> = ({ projects }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [doneAnimating, setDoneAnimating] = useState(false);

  return (
    <section className="px-6 font-neue md:px-16">
      <article className="flex flex-col gap-2 pb-8">
        <div ref={ref}>
          <ProjectsSectionHeader
            isInView={isInView}
            doneAnimating={doneAnimating}
            setDoneAnimating={setDoneAnimating}
          />
        </div>

        <ProjectsSectionSubheader
          isInView={isInView}
          doneAnimating={doneAnimating}
          setDoneAnimating={setDoneAnimating}
        />
        <ViewAllLink
          isInView={isInView}
          doneAnimating={doneAnimating}
          setDoneAnimating={setDoneAnimating}
        />
      </article>
      <Spacer className="h-16" />

      <ProjectsList projects={projects} />
    </section>
  );
};

export default ProjectsSection;
