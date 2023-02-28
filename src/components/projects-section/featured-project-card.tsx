import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { ProjectType } from "@/types/sanity/projects";
import { HiArrowRight } from "react-icons/hi2";

interface Props {
  project: ProjectType;
}

const FeaturedProjectCard: FC<Props> = ({ project }) => {
  return (
    <article className="flex justify-between border-b border-black py-8 font-sans">
      <div className="flex items-baseline gap-2">
        <p className="text-xl font-thin uppercase">{project.title}</p>
        <p className="text-sm text-slate-500">{project.category}</p>
      </div>
      <HiArrowRight className="text-3xl" />
    </article>
  );
};
export default FeaturedProjectCard;

{
  /* <div className="w-full">
  <div className="h-80">
    <Image
      src={project.image.url}
      alt="test"
      width={project.image.dimensions.width}
      height={project.image.dimensions.height}
      priority={true}
      className="h-full w-full object-cover"
    />
  </div>
  <h3 className="mt-4 font-semibold">{project.title}</h3>
  <p className="text-gray-600">{project.description}</p>
</div> */
}
