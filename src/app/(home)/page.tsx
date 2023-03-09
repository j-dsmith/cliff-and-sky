import { myClient } from "@/lib/sanity";
import { projectsValidator } from "@/types/sanity/projects";
import { SanityClient } from "next-sanity";

import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section/projects-section";
import Spacer from "@/components/spacer";
import AboutSection from "@/components/about-section/about-section";

const HomePage = async () => {
  const projects = await getProjects(myClient);

  return (
    <div>
      <HeroSection />
      <Spacer className="h-20" />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <Spacer className="h-20" />
    </div>
  );
};

async function getProjects(client: SanityClient) {
  const res = await client.fetch(
    `*[_type == "project"]{_id ,title, category, description,  image{asset->}}`
  );

  const parsedRes = projectsValidator.parse(res);

  return parsedRes;
}

export default HomePage;
