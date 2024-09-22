"use client";

import logo from "@/../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between px-28 py-4 text-black h-24 w-full bg-white top-0 border-b border-gray-200">
      <Link href={"/"}>
        <div>
          <Image src={logo} alt="logo" />
        </div>
      </Link>
      <div className="flex gap-8 text-xl">
        <Link
          href={"/about"}
          className={`${
            pathname === "/about"
              ? "border-b-2 border-[#573102]"
              : "hover:border-b-2 hover:border-[#573102]"
          }`}
        >
          About Me
        </Link>
        <Link
          href={pathname === "/" ? "#featuredProjects" : "/projects"}
          className={`${
            pathname === "/projects"
              ? "border-b-2 border-[#573102]"
              : "hover:border-b-2 hover:border-[#573102]"
          }`}
        >
          Projects
        </Link>
      </div>
      <div>
        <Button className="p-6 text-xl rounded-xl bg-customYellow border-b-4 border-[#573102] text-black hover:border-b-0 hover:bg-customYellow">
          Work With Me
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
