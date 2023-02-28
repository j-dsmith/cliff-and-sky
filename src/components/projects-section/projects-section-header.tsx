import { Dispatch, FC } from "react";
import { EASING } from "@/constants/animations";
import { motion } from "framer-motion";

interface Props {
  isInView: boolean;
  doneAnimating: boolean;
  setDoneAnimating: Dispatch<boolean>;
}

const ProjectsSectionHeader: FC<Props> = ({ isInView, doneAnimating, setDoneAnimating }) => {
  const textClasses =
    "absolute inline-block h-full w-full origin-left py-1 leading-none will-change-transform";
  const textSections = ["Selected", "Projects"];
  const renderAnimatedText = () => {
    return textSections.map((text) => (
      <div className="relative overflow-hidden font-neue-medium text-6xl" key={text}>
        <motion.span
          className={textClasses}
          variants={textVariants}
          initial="initial"
          animate={isInView && !doneAnimating ? "animate" : doneAnimating ? "final" : ""}
          onAnimationComplete={() => setDoneAnimating(true)}
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
      duration: 1.8,
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
