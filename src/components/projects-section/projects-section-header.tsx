import { FC } from "react";
import { AnimationControls } from "framer-motion";
import FlyInText from "@/components/animations/fly-in-text";

interface Props {
  controls: AnimationControls;
}

const ProjectsSectionHeader: FC<Props> = ({ controls }) => {
  const textSections = ["Selected", "Projects"];
  const renderAnimatedText = () => {
    return textSections.map((text) => (
      <FlyInText key={text} text={text} className="text-6xl font-semibold" controls={controls} />
    ));
  };
  return <>{renderAnimatedText()}</>;
};

export default ProjectsSectionHeader;
