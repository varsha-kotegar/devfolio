import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectsIndex from "@/components/ProjectsIndex";
import Leadership from "@/components/Leadership";
import TechnicalExposure from "@/components/TechnicalExposure";
import Learning from "@/components/Learning";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ProjectsIndex />
        <Leadership />
        <TechnicalExposure />
        <Learning />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
