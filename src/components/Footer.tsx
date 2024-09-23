import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bottom-0 bg-white flex items-center justify-between px-4 md:px-24 h-40 border-t border-gray-200">
      <div className="flex lg:w-1/6 w-1/3 justify-evenly">
        <Link
          href={
            "mailto:addtemi270@gmail.com?subject=Work%20With%20Me&body=Hello Temi, I would like to work with you..."
          }
          target="_blank"
        >
          <IoIosMail className="bg-[#FCB257] md:text-5xl text-3xl rounded-full md:p-2 p-1" />
        </Link>

        <Link
          href={"https://linkedin.com/in/adekunle-temidayo-887b8819b"}
          target="_blank"
        >
          <FaLinkedinIn className="bg-[#FCB257] md:text-5xl text-3xl rounded-full md:p-2 p-1" />
        </Link>
        <Link
          href={"https://dribbble.com/ChadBosewick27/shots"}
          target="_blank"
        >
          <FaDribbble className="bg-[#FCB257] md:text-5xl text-3xl rounded-full md:p-2 p-1" />
        </Link>
      </div>
      <div>
        <p className="text-gray-800 md:text-xl">
          Designed by Temidayo Adekunle
        </p>
        <p className="text-gray-800 md:text-xl">
          Frontend by{" "}
          <Link href={"https://x.com/Froches_"} target="_blank">
            @Froches
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
