import { ProjectsType, ProjectType } from "@/types/sanity/projects";
import { FC } from "react";
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
