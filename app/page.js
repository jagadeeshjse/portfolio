import { personalData as staticPersonalData, getPersonalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
// import Blog from "./components/homepage/blog"; // Blog is temporarily disabled
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

/*
async function getData() {
  // read runtime personal data (from public/personal-data.json) so changes reflect without rebuild
  const pd = (await getPersonalData()) || staticPersonalData;
  const username = pd?.devUsername || 'said7388';

  const res = await fetch(`https://dev.to/api/articles?username=${username}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};
*/

export default async function Home() {
  // Blogs are disabled. To re-enable, uncomment the getData function above and the lines below.
  // const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  )
};