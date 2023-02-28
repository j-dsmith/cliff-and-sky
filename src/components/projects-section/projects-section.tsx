"use client";

import { motion, useInView } from "framer-motion";
import { ProjectsType } from "@/types/sanity/projects";
import { FC, useEffect, useRef, useState } from "react";
import FeaturedProjectCard from "@/components/featured-project-card";
import { EASING } from "@/constants/animations";
import ProjectsSectionHeader from "./projects-section-header";
import ArrowLink from "@/components/arrow-link";
import ProjectsSectionSubheader from "./projects-section-subheader";
import Spacer from "../spacer";
import ViewAllLink from "./view-all-projects-link";

interface Props {
  projects: ProjectsType;
}

const ProjectsSection: FC<Props> = ({ projects }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [doneAnimating, setDoneAnimating] = useState(false);

  return (
    <section className="mt-20 px-8  font-neue md:px-16">
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

export default ProjectsSection;
