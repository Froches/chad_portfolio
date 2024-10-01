import Image from "next/image";
import Overlay from "./Overlay";
import historyofafrica from "@/../public/assets/features/historyofafrica-img.svg";
import homeworkai from "@/../public/assets/features/homeworkai-img.svg";
import hotgist from "@/../public/assets/features/hotgist-img.svg";
import letters from "@/../public/assets/features/letters-img.svg";
import sparkpay from "@/../public/assets/features/sparkpay-img.svg";
import tifi from "@/../public/assets/features/tifi-img.svg";
import historyofafricaLogo from "@/../public/assets/logos/historyofafrica-logo.svg";
import homeworkaiLogo from "@/../public/assets/logos/homeworkai-logo.svg";
import hotgistLogo from "@/../public/assets/logos/hotgist-logo.svg";
import lettersLogo from "@/../public/assets/logos/letters-logo.svg";
import sparkpayLogo from "@/../public/assets/logos/sparkpay-logo.svg";
import tifiLogo from "@/../public/assets/logos/tifi-logo.svg";
import { StaticImageData } from "next/image";

interface FeatureContent {
  alt: string;
  image: StaticImageData;
  logo: StaticImageData;
  desc: string;
  tag1: string;
  tag2: string;
  href: string;
  color: string;
}

const featureContent: FeatureContent[] = [
  {
    alt: "Tifi.tv - AI Video Tools Website",
    image: tifi,
    logo: tifiLogo,
    desc: "TiFi streamlines content creation with AI-driven tools for transcription, summarization, and generation.",
    tag1: "Content Generation",
    tag2: "AI-Powered",
    href: "/projects/tifi",
    color: "bg-[#F0F0F0]",
  },
  {
    alt: "Letters app",
    image: letters,
    logo: lettersLogo,
    desc: "Letters blends traditional letter writing with modern digital communication for thoughtful, long-form posts.",
    tag1: "Social Media",
    tag2: "AI-Assistance",
    href: "/projects/letters",
    color: "bg-[#FCEEE8]",
  },
  {
    alt: "Hotgist app",
    image: hotgist,
    logo: hotgistLogo,
    desc: "HotGistApp introduces innovative, fresh functionality that keeps users engaged in dynamic, trending conversations.",
    tag1: "Social Media",
    tag2: "Entertainment",
    href: "/projects/hotgist",
    color: "bg-[#E8FCF7]",
  },
  {
    alt: "Homework AI app",
    image: homeworkai,
    logo: homeworkaiLogo,
    desc: "HomeworkAI empowers young learners with AI-driven tools for seamless homework assistance and enhanced learning experiences.",
    tag1: "Education",
    tag2: "AI-Assistance",
    href: "/projects/homeworkai",
    color: "bg-[#FFF7F5]",
  },
  {
    alt: "History of Africa project",
    image: historyofafrica,
    logo: historyofafricaLogo,
    desc: "The project aimed to create a visually captivating and educational site showcasing 10th-century Africa's rich history.",
    tag1: "Education",
    tag2: "AI-Assistance",
    href: "/projects/historyofafrica",
    color: "bg-[#FFF2E5]",
  },
  {
    alt: "Sparkpay app",
    image: sparkpay,
    logo: sparkpayLogo,
    desc: "SparkPay offers a seamless, personalized experience for electricity bill payments focused on customer satisfaction.",
    tag1: "Fintech",
    tag2: "Utility Management",
    href: "/projects/sparkpay",
    color: "bg-[#E6F0FA]",
  },
];
const FeaturedProjects = ({}) => {
  return (
    <div className="w-[85vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center justify-around justify-items-center">
      {featureContent.map((feature: FeatureContent, index: number) => (
        <div
          className={`w-full h-[416px] rounded-md border-2 flex items-center justify-center border-gray-300 relative overflow-hidden ${feature.color}`}
          key={index}
        >
          <Image src={feature.image} alt={feature.alt} />
          <Overlay
            logo={feature.logo}
            desc={feature.desc}
            tag1={feature.tag1}
            tag2={feature.tag2}
            alt={feature.alt}
            href={feature.href}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
