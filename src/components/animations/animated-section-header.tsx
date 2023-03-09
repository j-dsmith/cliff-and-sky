import { FC, useRef } from "react";
import clsx from "clsx";
import { useAnimationControls } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { TRANSITION } from "@/constants/animations";
import FlyInText from "./fly-in-text";
import FadeIn from "./fade-in";
import TextArrowLink from "@/components/text-arrow-link";
import Spacer from "../spacer";

interface Props {
  headerConfig: {
    headerSections: string[];
    classOverride?: string;
  };
  subheaderConfig?: {
    text: string;
  };
  linkConfig: {
    label: string;
    url: string;
  };
  theme: "light" | "dark";
}

const AnimatedSectionHeader: FC<Props> = ({ headerConfig, subheaderConfig, linkConfig, theme }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  useInViewAnimation<typeof ref>(ref, controls);

  const { headerSections, classOverride } = headerConfig;
  const { label, url } = linkConfig;

  const subHeaderTransition = {
    ...TRANSITION.genericTextSpring,
    delay: 0.9,
    duration: 1.5,
  };

  /**
   * Renders the animated text header
   * @param text text sections to render
   * @param classOverride override the default class of font-6xl, font-semibold
   * @returns FlyInText components with the text sections
   */
  const renderAnimatedHeader = () => {
    return headerSections.map((text) => (
      <FlyInText
        key={text}
        text={text}
        className={clsx("text-6xl font-semibold", classOverride)}
        controller={controls}
      />
    ));
  };

  const renderAnimatedSubheader = () => {
    return !subheaderConfig ? null : (
      <FadeIn controller={controls} direction="y" yStart={10} transition={subHeaderTransition}>
        <p className="w-[25ch] text-slate-600 will-change-transform">{subheaderConfig.text}</p>
      </FadeIn>
    );
  };

  return (
    <article ref={ref}>
      {renderAnimatedHeader()}
      {renderAnimatedSubheader()}
      <Spacer className="h-4" />
      <TextArrowLink controller={controls} label={label} url={url} theme={theme} />
      <Spacer className="h-16" />
    </article>
  );
};
export default AnimatedSectionHeader;
