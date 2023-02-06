import Image from "next/image";
import heroSrc from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <section className="isolate flex h-[calc(100vh-80px)] flex-col items-center justify-end">
      <h1 className="relative  z-50 translate-y-8 text-center font-walsheim text-7xl uppercase">
        <span>Cliff</span>
        <br />
        <span className="">& Sky</span>
      </h1>
      <div className="relative px-8 md:px-16">
        <Image
          src={heroSrc}
          alt="hero image"
          width={5184}
          height={3456}
          className="h-[500px] object-cover"
        />
        <div className="absolute top-0 left-8 h-full w-[calc(100%-64px)]"></div>
      </div>
    </section>
  );
};
export default HeroSection;
