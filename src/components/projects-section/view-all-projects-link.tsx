import { FC, Dispatch } from "react";
import { EASING } from "@/constants/animations";
import { AnimationControls, motion } from "framer-motion";
import ArrowLink from "../arrow-link";

interface Props {
  controls: AnimationControls;
}

const ViewAllLink: FC<Props> = ({ controls }) => {
  return (
    <motion.div
      variants={wrapperVariants}
      initial="initial"
      animate={controls}
      className="flex items-center gap-4 will-change-transform"
    >
      <p className="text-xl uppercase">See All</p>
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
      delay: 0.9,
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
