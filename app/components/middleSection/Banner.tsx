import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface BannerRef {
  ref: React.RefObject<HTMLDivElement | null>;
  cRef: React.RefObject<HTMLDivElement | null>;
  name: string;
  clickFn: (ref: React.RefObject<HTMLDivElement | null>, name: string) => void;
}

const Banner = ({ ref, name, clickFn, cRef }: BannerRef) => {
  return (
    <div
      ref={ref}
      className="relative flex items-stretch px-16 justify-between bg-component-background 2xl:mb-40 mb-32"
    >
      <div className="w-125 shrink-0 flex flex-col justify-center">
        <h1 className="font-sans text-5xl font-bold">
          {"I'm"} Nischal Shrestha{" "}
          <span className="text-primary">Software </span>
          Engineer
        </h1>
        <p className="text-paragraph my-6">
          With a comprehensive background in frontend, backend, and desktop
          development, I bring a holistic perspective to software engineering. I
          excel at navigating the entire lifecycle of a product—designing
          efficient APIs, crafting responsive UIs, and ensuring stability across
          platforms—to deliver seamless digital experiences that users actually
          love.
        </p>
        <button
          className="bg-primary py-4 px-10 rounded flex items-center gap-2 w-fit hover:cursor-pointer hover:text-white"
          onClick={() => clickFn(cRef, name)}
        >
          HIRE ME <FiArrowRight />
        </button>
      </div>
      <div className="relative flex-1 h-125">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/image_with_white_bg.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          alt="profile image"
        />
      </div>
      <div className="h-4 w-4 rounded-full border-2 border-primary absolute left-10 top-5"></div>
      <div className="h-4 w-4 rounded-full border-2 border-green-300 absolute left-25 top-110"></div>
      <div className="h-4 w-4 rounded-full border-2 border-green-300 absolute left-125 top-10"></div>
      <div className="h-4 w-4 rounded-full border-2 border-primary absolute left-135 top-100"></div>
      <div className="h-4 w-4 border-2 border-blue-500 absolute left-100 top-90 rotate-45"></div>
      <div className="h-4 w-4 border-2 border-primary absolute left-210 top-20 rotate-45"></div>
      <svg viewBox="0 0 100 100" className="w-3 h-3 absolute left-210 top-115 ">
        <polygon
          points="50,5 95,95 5,95"
          fill="none"
          className="stroke-red-600"
          strokeWidth="16"
        />
      </svg>
    </div>
  );
};

export default Banner;
