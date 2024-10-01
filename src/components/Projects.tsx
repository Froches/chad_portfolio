import FeaturedProjects from "./FeaturedProjects";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { zoomIn } from "@/app/variants";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full min-h-screen gap-8 pb-20 scroll-smooth"
      id="featuredProjects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={zoomIn}
    >
      <div className="w-[85vw] flex items-start justify-start flex-col gap-4 font-sans">
        <h3 className="text-4xl">Featured Projects</h3>
        <p className="text-[#212121] lg:w-1/2 text-lg">
          Look through my works: read case studies, have a look at live sites
          and try out prototypes I have built.
        </p>
      </div>
      <FeaturedProjects />
    </motion.div>
  );
};

export default Projects;
