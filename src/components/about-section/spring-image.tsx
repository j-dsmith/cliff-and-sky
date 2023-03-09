import { FC } from "react";
import { loadFeatures } from "@/lib/framer";
import Image from "next/image";
import { LazyMotion, m, MotionValue } from "framer-motion";
import clsx from "clsx";

type ImageProps = React.ComponentProps<typeof Image>;

interface Props {
  image: ImageProps;
  springConfig: {
    x?: MotionValue<number>;
    y?: MotionValue<number>;
  };
  className?: string;
}

const SpringImage: FC<Props> = ({ image, springConfig, className }) => {
  const { x, y } = springConfig;
  const { src, alt } = image;
  const springValue = { x: x || undefined, y: y || undefined };

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        style={springValue}
        className={clsx("absolute max-w-[50%] will-change-transform", className)}
      >
        {/* TODO: Optimize image and sizes */}
        <Image src={src} alt={alt} width={500} height={500} />
      </m.div>
    </LazyMotion>
  );
};
export default SpringImage;
