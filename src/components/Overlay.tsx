import Image from "next/image";
import Link from "next/link";
import { FaArrowRight} from 'react-icons/fa'
import { StaticImageData } from "next/image";

interface OverlayProps {
  logo: StaticImageData;
  desc: string;
  tag1: string;
  tag2: string;
  alt: string;
  href: string;
}
const Overlay = ({ logo, desc, tag1, tag2, alt, href }: OverlayProps) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-70 hidden md:flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white">
      <div className="flex items-center lg:items-start justify-center flex-col p-10 lg:p-16 gap-7">
        <Image src={logo} alt={alt} />
        <p>{desc}</p>
        <div className="flex gap-5 font-bold">
          <p>{tag1}</p>
          <p>•</p>
          <p>{tag2}</p>
        </div>
      </div>
      <Link
        href={href}
        target={href.startsWith("https") ? "_blank" : "_self"}
        className="flex text-[#FCB257] text-lg font-semibold self-start px-10 pb-8 lg:p-16 items-center hover:underline"
      >
        <p>Read More</p> <FaArrowRight />{" "}
      </Link>
    </div>
  );
};

export default Overlay;
