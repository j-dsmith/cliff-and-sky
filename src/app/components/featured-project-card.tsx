import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  project: StaticImageData;
}

const FeaturedProjectCard: FC<Props> = ({ project }) => {
  return (
    <article>
      <div className="w-full">
        <Image src={project} alt="1" className="h-80 w-full object-cover" />
        <h3 className="mt-4 font-semibold">Project Title</h3>
        <p className="text-gray-600">Project description</p>
      </div>
    </article>
  );
};
export default FeaturedProjectCard;
