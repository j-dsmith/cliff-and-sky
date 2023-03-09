import { FC } from "react";
import { TRANSITION } from "@/constants/animations";
import ArrowLink from "@/components/arrow-link";
import FadeIn from "@/components/animations/fade-in";
import { AnimationController } from "@/types/sharedAnimations";
import { cva } from "class-variance-authority";

interface Props {
  controller: AnimationController;
  url: string;
  label: string;
  theme: "light" | "dark";
}

const labelClasses = cva(["text-xl", "uppercase"], {
  variants: {
    theme: {
      dark: ["text-white"],
      light: ["text-black"],
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

const TextArrowLink: FC<Props> = ({ controller, url, label, theme }) => {
  const transition = {
    ...TRANSITION.genericTextSpring,
    delay: 0.9,
    duration: 1.5,
  };
  return (
    <FadeIn controller={controller} direction="x" xStart={-20} transition={transition}>
      <div className="flex items-center gap-4 will-change-transform">
        <p className={labelClasses({ theme })}>{label}</p>
        <ArrowLink url={url} theme={theme} />
      </div>
    </FadeIn>
  );
};

export default TextArrowLink;
