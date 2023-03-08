import { Dispatch, FC } from "react";
import { EASING } from "@/constants/animations";
import { AnimationControls, motion } from "framer-motion";

interface Props {
  controls: AnimationControls;
}

const ProjectsSectionHeader: FC<Props> = ({ controls }) => {
  const textClasses =
    "absolute inline-block h-full w-full origin-left leading-none will-change-transform";
  const textSections = ["Selected", "Projects"];
  const renderAnimatedText = () => {
    return textSections.map((text) => (
      <div className="relative overflow-hidden text-6xl font-semibold" key={text}>
        <motion.span
          className={textClasses}
          variants={textVariants}
          initial="initial"
          animate={controls}
        >
          {text}
        </motion.span>
        <p className="invisible py-1 leading-none">{text}</p>
      </div>
    ));
  };
  return <>{renderAnimatedText()}</>;
};

// Animations
const textVariants = {
  initial: {
    opacity: 0,
    y: 100,
    rotate: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: EASING.easeOutCubic,
    },
  },
  final: {
    opacity: 1,
    y: 0,
    rotate: 0,
  },
};

export default ProjectsSectionHeader;
