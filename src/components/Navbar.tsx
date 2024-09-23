"use client";

import { useState } from "react";
import logo from "@/../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:addtemi270@gmail.com?subject=Work%20With%20Me&body=Hello Temi, I would like to work with you...";
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-8 md:px-28 py-4 text-black h-24 w-full bg-white top-0 border-b border-gray-200 z-50">
        <Link href={"/"}>
          <div>
            <Image src={logo} alt="logo" />
          </div>
        </Link>
        <div className="md:flex md:gap-8 text-xl hidden">
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
              pathname.startsWith("/projects/")
                ? "border-b-2 border-[#573102]"
                : "hover:border-b-2 hover:border-[#573102]"
            }`}
          >
            Projects
          </Link>
        </div>
        <div className="hidden md:block">
          <Button onClick={handleEmailClick} className="p-6 text-xl rounded-xl bg-customYellow border-b-4 border-[#573102] text-black hover:border-b-0 hover:bg-customYellow">
            Work With Me
          </Button>
        </div>
        <div className="md:hidden z-50">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white text-black transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col items-center justify-center space-y-8 text-2xl z-40`}
      >
        <Link
          href={"/about"}
          className={`${
            pathname === "/about"
              ? "border-b-2 border-[#573102]"
              : "hover:border-b-2 hover:border-[#573102]"
          }`}
          onClick={toggleMenu}
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
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Button
          className="p-6 text-xl rounded-xl bg-customYellow border-b-4 border-[#573102] mt-24 text-black hover:border-b-0 hover:bg-customYellow"
          onClick={handleEmailClick}
        >
          Work With Me
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
