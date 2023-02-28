import { myClient } from "@/lib/sanity";
import { projectsValidator } from "@/types/sanity/projects";
import { SanityClient } from "next-sanity";

import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section/projects-section";

const HomePage = async () => {
  const projects = await getProjects(myClient);

  return (
    <div>
      <HeroSection />
      <ProjectsSection projects={projects} />
    </div>
  );
};

async function getProjects(client: SanityClient) {
  const res = await client.fetch(`*[_type == "project"]{_id ,title, description,  image{asset->}}`);

  const parsedRes = projectsValidator.parse(res);

  return parsedRes;
}

export default HomePage;
