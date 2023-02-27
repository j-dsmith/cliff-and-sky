import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { ProjectType } from "@/types/sanity/projects";

interface Props {
  project: ProjectType;
}

const FeaturedProjectCard: FC<Props> = ({ project }) => {
  return (
    <article>
      <div className="w-full">
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
      </div>
    </article>
  );
};
export default FeaturedProjectCard;
