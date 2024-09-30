"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { mockProjects } from "../MockProjects";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Page = () => {
  const params = useParams();
  const pathname = usePathname();
  const projectId = params.id;

  const project = mockProjects.find((proj) => proj.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-[#212121] px-8 py-14 md:p-28 space-y-10">
      <div className="flex flex-col w-full items-start justify-center gap-7 ">
        <Image
          src={project.logo}
          alt={project.title}
          width={150}
          height={150}
        />
        <h1 className="text-2xl">{project.title}</h1>
        <div className="text-xl space-y-5">
          <div className="flex w-full items-center justify-center">
            <p className="text-gray-500 ">Client: </p>
            <span className="ml-8 w-10/12">{project.client}</span>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="text-gray-500">Role:</p>
            <span className="ml-8 w-10/12">{project.role}</span>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="text-gray-500">Year:</p>
            <span className="ml-8 w-10/12">{project.year}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-xl leading-loose gap-8 pt-10">
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-semibold">Project Background</h2>
            <p>{project.projectBackground}</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Goals</h2>
            <p>{project.goals}</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Challenge</h2>
            <p>{project.challenge}</p>
          </div>
        </div>
        <div>
          <Image
            src={project.homeImage}
            alt="Home Image"
            width={600}
            height={600}
          />
          <div>
            <h2 className="text-3xl font-semibold">My Impact</h2>
            <p>{project.impact}</p>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 text-xl leading-loose">
        <h2 className="text-3xl font-semibold">Design Process</h2>
        {project.designProcess?.map((item, index) => (
          <div key={item}>
            <p className={`${index === 0 ? "text-gray-500 text-2xl" : "mb-5"}`}>
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-8 w-full items-center justify-center">
        {project.caseStudy?.map((item) => (
          <Image
            key={item}
            alt="Case Study"
            width={600}
            height={100}
            src={item}
          />
        ))}
      </div>

      <div className="md:w-2/3 text-xl leading-loose">
        <p className="text-2xl font-semibold text-gray-500">
          Keeping It Simple
        </p>
        <p>{project.simple}</p>
      </div>

      <div className="w-full min-h-screen h-fit flex flex-col gap-8 items-center justify-start">
        {project.extraCaseStudies?.map((item) => (
          <Image
            key={item}
            alt="Extra Case Study"
            width={1200}
            height={600}
            src={item}
          />
        ))}
      </div>

      <div className="md:w-2/3 text-xl leading-loose">
        <h4 className="text-3xl font-semibold">Conclusion</h4>
        <p>{project.conclusion}</p>
      </div>

      <p className="md:w-2/3 text-xl leading-loose">
        Feel free to explore the live product{" "}
        <Link
          href={
            pathname === "/projects/tifi"
              ? "https://tifi.tv"
              : "https://homeworkai.com"
          }
          target="_blank"
          className="text-orange-400 underline"
        >
          Live Link{" "}
        </Link>
      </p>

      <div className="text-xl leading-loose flex md:flex-row flex-col justify-around md:w-2/3 space-y-6">
        <Button
          variant={"secondary"}
          className="text-xl leading-loose p-6 border border-orange-400 rounded-2xl bg-white font-semibold"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Back to Home
        </Button>
        <Button
          variant={"secondary"}
          className="text-xl leading-loose p-6 border border-orange-400 rounded-2xl bg-white font-semibold"
          onClick={() => {
            window.location.href = "/#featuredProjects";
          }}
        >
          See More Projects
        </Button>
      </div>
    </div>
  );
};

export default Page;
