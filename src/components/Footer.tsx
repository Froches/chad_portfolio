import { FaMailBulk, FaLinkedinIn, FaGlobe} from 'react-icons/fa'
import { LuMail, LuGlobe } from 'react-icons/lu';
import { FaDribbble } from 'react-icons/fa'
import { } from 'react-icons/lia'
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bottom-0 bg-white flex items-center justify-between px-24 h-40 border-t border-gray-200">
      <div className="flex w-1/6 justify-evenly">
        <IoIosMail className='bg-[#FCB257] text-5xl rounded-full p-2' />
        <FaLinkedinIn className='bg-[#FCB257] text-5xl rounded-full p-2' />
        <FaDribbble className='bg-[#FCB257] text-5xl rounded-full p-2' />
      </div>
      <p className='text-gray-800 text-xl'>Designed by Temidayo Adekunle</p>
    </div>
  );
}

export default Footer
