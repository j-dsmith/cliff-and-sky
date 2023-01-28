import Image from "next/image";
import heroSrc from "@/assets/hero.png";
import RotatingText from "./rotating-text";

const HeroSection = () => {
  return (
    <section className="isolate flex h-[calc(100vh-80px)] flex-col items-center justify-end">
      <h1 className="relative z-50 translate-y-8 text-center font-walsheim text-7xl uppercase">
        <span>Cliff</span>
        <br />
        <span className="">& Sky</span>
      </h1>
      <div className="relative h-full w-full px-8 md:px-16">
        <Image
          src={heroSrc}
          alt="hero image"
          width={5184}
          height={3456}
          className="h-[500px] object-cover"
        />
      </div>
    </section>
  );
};
export default HeroSection;
