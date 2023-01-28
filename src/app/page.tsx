import { NextPage } from "next";
import HeroSection from "./components/hero-section";

const HomePage: NextPage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)]">
      <HeroSection />
    </div>
  );
};

export default HomePage;
