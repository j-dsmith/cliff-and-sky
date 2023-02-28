import { FC, Dispatch } from "react";
import { EASING } from "@/constants/animations";
import { motion } from "framer-motion";
import ArrowLink from "../arrow-link";

interface Props {
  isInView: boolean;
  doneAnimating: boolean;
  setDoneAnimating: Dispatch<boolean>;
}

const ViewAllLink: FC<Props> = ({ isInView, doneAnimating, setDoneAnimating }) => {
  return (
    <motion.div
      variants={wrapperVariants}
      initial="initial"
      animate={isInView && !doneAnimating ? "animate" : doneAnimating ? "final" : ""}
      onAnimationComplete={() => setDoneAnimating(true)}
      className="flex items-center gap-4 will-change-transform"
    >
      <p className="font-neue-thin text-xl uppercase">See All</p>
      <ArrowLink url="/design" theme="light" />
    </motion.div>
  );
};

const wrapperVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      delay: 1.5,
      duration: 1.5,
      ease: EASING.easeOutCubic,
    },
  },
  final: {
    opacity: 1,
    x: 0,
    rotate: 0,
  },
};

export default ViewAllLink;
