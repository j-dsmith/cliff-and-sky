import { NextPage } from "next";
import HeroSection from "./components/hero-section";
import ProjectsSection from "./projects-section";

const HomePage: NextPage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)]">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
