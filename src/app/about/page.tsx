"use client";
import headShot from "@/../public/assets/headShot.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen bg-white text-black pb-20"
      data-aos="fade"
    >
      <span className="w-1/2 self-start px-10 mx-32 pt-20 pb-16 leading-loose">
        <h3 className="text-4xl font-medium mb-3">Get to know about</h3>
        <b className="text-4xl font-sans font-semibold text-[#FCB257]">TEMI</b>
      </span>
      <div className="flex items-start justify-center w-full gap-8 px-10">
        <div className="flex items-center justify-center flex-col w-1/2 mx-16 gap-8">
          <p className="text-xl font-light font-sans gap-8 flex flex-col leading-loose">
            <span>
              Hi, I&apos;m Temidayo Adekunle, a Product Designer based in Lagos,
              Nigeria.
            </span>{" "}
            <span>
              After making the life-changing decision to pivot to Product Design
              over 13 months ago, I&apos;ve developed a passion for
              understanding users, brainstorming creative ideas, and
              collaborating with other designers to bring intuitive products to
              life.
            </span>{" "}
            <span>
              Growing up as the middle child in a family of three in the heart
              of Lagos, I&apos;ve been shaped by the city&apos;s vibrant hustle
              and bustle. This background deeply influences my user-centered
              design approach, setting me apart in the field.
            </span>{" "}
            <span>
              When I&apos;m not designing, I&apos;m a devout Christian with a
              love for arts, culture, entertainment, and sports.
            </span>
          </p>
          <Button className="p-6 text-xl rounded-xl bg-customYellow border-b-4 border-[#573102] text-black self-start hover:border-b-0 hover:bg-customYellow transition-all ease-in-out">
            My Resume
          </Button>
        </div>
        <Image src={headShot} alt="Temi headshot" className="" />
      </div>
    </div>
  );
};

export default page;
