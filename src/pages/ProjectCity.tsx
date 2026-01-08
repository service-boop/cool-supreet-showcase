import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectGallery from "@/components/ProjectGallery";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";
import project5 from "@/assets/project-5.jpeg";
import project6 from "@/assets/project-6.jpeg";
import project7 from "@/assets/project-7.jpeg";
import project8 from "@/assets/project-8.jpeg";
import project9 from "@/assets/project-9.jpeg";

import project10 from "@/assets/project-10.jpeg";
import project11 from "@/assets/project-11.jpeg";
import project12 from "@/assets/project-12.jpeg";
import project13 from "@/assets/project-13.jpeg";
import project14 from "@/assets/project-14.jpeg";
import project15 from "@/assets/project-15.jpeg";
import project16 from "@/assets/project-16.jpeg";
import project17 from "@/assets/project-17.jpeg";
import project18 from "@/assets/project-18.jpeg";
import project19 from "@/assets/project-19.jpeg";
import project20 from "@/assets/project-20.jpeg";
import project21 from "@/assets/project-21.jpeg";
import project22 from "@/assets/project-22.jpeg";
import project23 from "@/assets/project-23.jpeg";
import project24 from "@/assets/project-24.jpeg";
import project25 from "@/assets/project-25.jpeg";
import project26 from "@/assets/project-26.jpeg";
import project27 from "@/assets/project-27.jpeg";
// Note: Only importing up to project9 as those are the existing files.
// You have only 9 images total, but want 9 per city (4 cities).
// Since you can't have 36 unique images with only 9 files,
// we'll duplicate the same 9 images for each city.
// To have truly different images, add more files to your assets folder
// (e.g., project10.jpeg to project36.jpeg) and import them.

const cityImages: Record<string, string[]> = {
  mumbai: [
    project1, project2, project3, project4, project5, project6, project7, project8, project9
  ],
  pune: [
    project10, project11, project12, project13, project14, project15, project16, project17, project18
  ],
  bangalore: [
    project19, project20, project21, project22, project23, project24, project25, project26, project27
  ],
  indore: [
    project1, project2, project3, project4, project5, project6, project7, project8, project9
  ],
};

const cityData: Record<string, { name: string; description: string }> = {
  mumbai: {
    name: "Mumbai",
    description: "Showcasing excellence in HVAC installations across Mumbai's diverse commercial and residential landscape",
  },
  pune: {
    name: "Pune",
    description: "Delivering cutting-edge cooling solutions for Pune's thriving IT and industrial sectors",
  },
  bangalore: {
    name: "Bangalore",
    description: "Powering comfort in Bangalore's tech corridors and modern business spaces",
  },
  indore: {
    name: "Indore",
    description: "Trusted HVAC partner for Indore's growing commercial and residential developments",
  },
};

const ProjectCity = () => {
  const { city } = useParams();
  const cityInfo = city ? cityData[city.toLowerCase()] : null;

  if (!cityInfo) {
    return <Navigate to="/projects" replace />;
  }

  const images = cityImages[city.toLowerCase()] || [];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection
          title={`${cityInfo.name} Projects`}
          subtitle={cityInfo.description}
          backgroundImage={heroSlide2}
        />
        <ProjectGallery images={images} city={cityInfo.name} />
      </main>
      <Footer />
    </>
  );
};

export default ProjectCity;
