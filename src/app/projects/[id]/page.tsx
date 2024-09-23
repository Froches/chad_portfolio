"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { mockProjects } from "../MockProjects";
import Image from "next/image";

const Page = () => {
  const params = useParams();
  const projectId = params.id;

  const project = mockProjects.find((proj) => proj.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-black p-20">
      <div>
        <Image
          src={project.logo}
          alt={project.title}
          width={100}
          height={100}
        />
        <h1 className="">{project.title}</h1>
        <p>Client: {project.client}</p>
        <p>Role: {project.role}</p>
        <p>Year: {project.year}</p>
      </div>
      <div>
        <div>
          <div>
            <h2 className="text-3xl">Project Background</h2>
            <p>{project.projectBackground}</p>
          </div>
          <div>
            <h2 className="text-3xl">Goals</h2>
            <p>{project.goals}</p>
          </div>
        </div>
        <Image
          src={project.homeImage}
          alt="Home Image"
          width={100}
          height={100}
        />
      </div>

      <div>
        <h2 className="text-3xl">Challenge</h2>
        <p>{project.challenge}</p>
      </div>
      <div>
        <h2 className="text-3xl">My Impact</h2>
        <p>{project.impact}</p>
      </div>
      <div>
        <h2 className="text-3xl">Design Process</h2>
        {project.designProcess?.map((item) => (
          <div key={item}>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-8">
        {project.caseStudy?.map((item) => (
          <Image
            key={item}
            alt="Case Study"
            width={500}
            height={100}
            src={item}
          />
        ))}
      </div>

      <div>
        <p>Keeping It Simple</p>
        <p>{project.simple}</p>
      </div>

      <div>
        <h4>Conclusion</h4>
        <p>{project.conclusion}</p>
      </div>

      <Link href="/projects" className="mt-6 text-blue-500 hover:underline">
        Back to Projects
      </Link>
    </div>
  );
};

export default Page;
