import { ProjectsType, ProjectType } from "@/types/sanity/projects";
import { FC } from "react";
import FeaturedProjectCard from "./featured-project-card";

interface Props {
  projects: ProjectsType;
}

const ProjectsList: FC<Props> = ({ projects }) => {
  const renderProjectCards = () => {
    return projects.map((project: ProjectType) => (
      <li key={project._id}>
        <FeaturedProjectCard project={project} />
      </li>
    ));
  };
  return <ul className="border-t border-black">{renderProjectCards()}</ul>;
};
export default ProjectsList;
