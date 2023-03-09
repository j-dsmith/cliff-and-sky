import AnimatedSectionHeader from "../animations/animated-section-header";

const AboutBanner = () => {
  const headerSections = ["Get to", "know me."];
  const headerConfig = { headerSections };
  const linkConfig = { label: "About", url: "/about" };

  return (
    <div className="px-6">
      <AnimatedSectionHeader headerConfig={headerConfig} linkConfig={linkConfig} theme="light" />
    </div>
  );
};

export default AboutBanner;
