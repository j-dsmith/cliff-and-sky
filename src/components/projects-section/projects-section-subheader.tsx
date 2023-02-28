import { Dispatch, FC } from "react";
import { EASING } from "@/constants/animations";
import { motion } from "framer-motion";

interface Props {
  isInView: boolean;
  doneAnimating: boolean;
  setDoneAnimating: Dispatch<boolean>;
}

const ProjectsSectionSubheader: FC<Props> = ({ isInView, doneAnimating, setDoneAnimating }) => {
  return (
    <motion.p
      variants={headerVariants}
      initial="initial"
      animate={isInView && !doneAnimating ? "animate" : doneAnimating ? "final" : ""}
      onAnimationComplete={() => setDoneAnimating(true)}
      className="w-[25ch] font-light text-slate-700 will-change-transform"
    >
      Freelance and personal graphic design projects I&apos;m proud of!
    </motion.p>
  );
};

// Animations
const headerVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
      duration: 1.5,
      ease: EASING.easeOutCubic,
    },
  },
  final: {
    opacity: 1,
    y: 0,
    rotate: 0,
  },
};
export default ProjectsSectionSubheader;
