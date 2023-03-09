import { AnimationControls } from "framer-motion";

export const setAnimationController = (controller: boolean | AnimationControls) => {
  if (typeof controller === "boolean") {
    return controller ? "animate" : ("initial" as "animate" | "initial");
  }
  return controller as AnimationControls;
};
