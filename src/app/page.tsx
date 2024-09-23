"use client";

import Image from "next/image";
import heroIllustration from "@/../public/assets/hero-illustration.svg";
import Projects from "@/components/Projects";
// import { useEffect } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  // }, []);
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-black space-y-20">
      <div
        className="flex items-center justify-center w-full gap-8 px-10 py-20"
        data-aos="fade-in"
      >
        <div className="flex items-center justify-center flex-col md:w-1/2 lg:mx-16 gap-8">
          <span className="w-full">
            <h3 className="text-4xl font-medium mb-3">
              Hello 👋, I am Temidayo, a
            </h3>
            <i className="text-4xl font-sans font-light text-[#212121]">
              product designer
            </i>
          </span>

          <p className="text-2xl font-light font-sans">
            Bringing <i className="font-extralight">impactful</i> product ideas
            to life with <i className="font-extralight">seamless</i>, intuitive
            <i className="font-extralight"> user experiences</i>.
          </p>
        </div>
        <Image src={heroIllustration} alt="hero illustration" className="hidden md:block md:w-1/2 lg:w-auto" />
      </div>
      <Projects />
    </div>
  );
}
