"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useTransformedSpringValue } from "@/hooks/useTransformedSpringValue";
import AboutBanner from "./about-banner";
import SpringImage from "./spring-image";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const mass = 2;
  const restDelta = 0.001;

  const imageTransforms = {
    zero: {
      range: [0, 15],
      config: { damping: 100, mass, restDelta },
    },
    one: {
      range: [0, -8],
      config: { damping: 50, mass, restDelta },
    },
    two: {
      range: [0, -8],
      config: { damping: 70, mass, restDelta },
    },
    three: {
      range: [0, 10],
      config: { damping: 90, mass, restDelta },
    },
    four: {
      range: [0, 20],
      config: { damping: 45, mass, restDelta },
    },
  };

  const imageSpring = useTransformedSpringValue(
    scrollYProgress,
    imageTransforms.zero.range,
    imageTransforms.zero.config
  );

  const imageOneSpring = useTransformedSpringValue(
    scrollYProgress,
    imageTransforms.one.range,
    imageTransforms.one.config
  );
  const imageTwoSpring = useTransformedSpringValue(
    scrollYProgress,
    imageTransforms.two.range,
    imageTransforms.two.config
  );
  const imageThreeSpring = useTransformedSpringValue(
    scrollYProgress,
    imageTransforms.three.range,
    imageTransforms.three.config
  );
  const imageFourSpring = useTransformedSpringValue(
    scrollYProgress,
    imageTransforms.four.range,
    imageTransforms.four.config
  );

  return (
    <section className="min-h-[100vh] w-screen overflow-x-hidden">
      {/* <h1>{scrollY}</h1> */}
      {/* Image Showcase */}
      <article className="relative isolate h-[60vh] w-full" ref={ref}>
        {/* Todo: create spring image component and refactor to use. */}
        <SpringImage
          image={{
            src: "https://images.unsplash.com/photo-1678114842860-620d83cfd083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            alt: "test",
          }}
          springConfig={{ y: imageSpring }}
          className="top-20 left-1/4 z-10 w-1/2 "
        />
        <SpringImage
          image={{
            src: "https://images.unsplash.com/photo-1516592673884-4a382d1124c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            alt: "test",
          }}
          springConfig={{ x: imageOneSpring }}
          className="left-6 top-40 z-20 w-1/3"
        />
        <SpringImage
          image={{
            src: "https://images.unsplash.com/photo-1604542031658-5799ca5d7936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            alt: "test",
          }}
          springConfig={{ x: imageTwoSpring }}
          className="top-[335px] left-2 z-30 w-[calc(30%+10vw)]"
        />
        <SpringImage
          image={{
            src: "https://images.unsplash.com/photo-1677098077185-5438068c2ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            alt: "test",
          }}
          springConfig={{ x: imageThreeSpring }}
          className="top-24 right-8 z-40 w-1/4"
        />
        <SpringImage
          image={{
            src: "https://images.unsplash.com/photo-1676737830610-2cebe4843eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80",
            alt: "test",
          }}
          springConfig={{ x: imageFourSpring }}
          className="top-[335px] right-8 z-50 w-1/3"
        />
      </article>
      <AboutBanner />
    </section>
  );
};
export default AboutSection;
