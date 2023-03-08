import { Dispatch, FC } from "react";
import { EASING } from "@/constants/animations";
import { AnimationControls, motion } from "framer-motion";

interface Props {
  controls: AnimationControls;
}

const ProjectsSectionSubheader: FC<Props> = ({ controls }) => {
  return (
    <motion.p
      variants={headerVariants}
      initial="initial"
      animate={controls}
      className="w-[25ch] text-slate-700 will-change-transform"
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
