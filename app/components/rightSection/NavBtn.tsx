import React from "react";
import { IconType } from "react-icons";

interface NavBtnProps {
  Icon: IconType;
  ref: React.RefObject<HTMLDivElement | null>;
  clickfn: (ref: React.RefObject<HTMLDivElement | null>, name: string) => void;
  active?: boolean;
  name: string;
}
const NavBtn = ({ Icon, ref, clickfn, active, name }: NavBtnProps) => {
  return (
    <div className="flex flex-col items-center relative">
      {active && (
        <div className="absolute top-[-55]">
          <div>
            <p className="text-white bg-black px-4 py-1 my-2 rounded">{name}</p>
          </div>
          <svg
            viewBox="0 0 100 100"
            className="w-3 h-3 absolute right-[45%] top-9 rotate-180"
          >
            <polygon points="50,5 95,95 5,95" strokeWidth="16" />
          </svg>
        </div>
      )}
      <Icon
        className={`h-9 w-9 ${active ? "bg-primary" : "bg-background "} rounded-full p-2 hover:bg-primary hover:cursor-pointer`}
        onClick={() => clickfn(ref, name)}
      />
    </div>
  );
};

export default NavBtn;
