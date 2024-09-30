"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/#featuredProjects");
  }, [router]);
  return (
    <div className="w-full bg-white h-screen flex items-center justify-center">
      <HashLoader className="text-orange-600" />
    </div>
  );
};

export default Page;
