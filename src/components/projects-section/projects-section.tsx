"use client";

import { ProjectsType } from "@/types/sanity/projects";
import { FC } from "react";
import ProjectsList from "./projects-list";
import AnimatedSectionHeader from "../animations/animated-section-header";

interface Props {
  projects: ProjectsType;
}

const ProjectsSection: FC<Props> = ({ projects }) => {
  const headerSections = ["Selected", "Projects."];
  const headerConfig = { headerSections };
  const subHeaderConfig = {
    text: "Freelance and personal graphic design projects I'm proud of!",
  };
  const linkConfig = { label: "See All", url: "/design" };

  return (
    <section className="px-6 md:px-16">
      <AnimatedSectionHeader
        headerConfig={headerConfig}
        subheaderConfig={subHeaderConfig}
        linkConfig={linkConfig}
        theme="light"
      />
      <ProjectsList projects={projects} />
    </section>
  );
};

export default ProjectsSection;
