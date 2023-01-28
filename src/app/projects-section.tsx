import FeaturedProjectCard from "./components/featured-project-card";
import src1 from "@/assets/one.jpg";
import src2 from "@/assets/two.jpg";
import src3 from "@/assets/three.jpg";

const ProjectsSection = () => {
  const projects = [src1, src2, src3];
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
        <li key="src-1">
          <FeaturedProjectCard project={src1} />
        </li>
        <li key="src-2">
          <FeaturedProjectCard project={src2} />
        </li>
        <li key="src-3">
          <FeaturedProjectCard project={src3} />
        </li>
      </ul>
    </section>
  );
};
export default ProjectsSection;
