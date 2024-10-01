"use client";

import Image from "next/image";
import heroIllustration from "@/../public/assets/hero-illustration.svg";
import Projects from "@/components/Projects";
import { fadeIn } from "@/app/variants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-black space-y-20">
      <motion.div
        className="flex items-center justify-center flex-col md:flex-row w-full gap-8 px-10 py-20 bg-[url('/assets/bgStars.svg')] bg-cover bg-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeIn}
      >
        <div className="flex items-center justify-center flex-col w-full md:w-1/2 lg:mx-16 gap-8">
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
        <Image
          src={heroIllustration}
          alt="hero illustration"
          className="md:block md:w-1/2 lg:w-auto"
        />
      </motion.div>
      <Projects />
    </div>
  );
}
