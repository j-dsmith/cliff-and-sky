import { ProjectsType } from "@/types/sanity/projects";
import { FC } from "react";
import FeaturedProjectCard from "./components/featured-project-card";

interface Props {
  projects: ProjectsType;
}

const ProjectsSection: FC<Props> = ({ projects }) => {
  return (
    <section className="mt-20 px-8  md:px-16">
      <article className="flex flex-col gap-8 pb-8">
        <p className="flex items-center">
          <span className="mr-2 text-xs">✦</span> Featured Projects
        </p>
        <h2 className="text-6xl uppercase">Work</h2>
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
export default ProjectsSection;
