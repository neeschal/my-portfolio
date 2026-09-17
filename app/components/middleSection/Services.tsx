import { SiCreatereactapp } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import Service from "./Service";
import React from "react";

interface ServicesProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const Services = ({ ref }: ServicesProps) => {
  return (
    <div ref={ref} className="2xl:pb-40 pb-32">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">My Services</h1>
        <p className="w-1/2 text-paragraph py-4 text-center">
          I build robust web, desktop, and wearable applications end-to-end,
          leveraging 6+ years of hands-on experience across the full stack
        </p>
      </div>
      <div className="mt-10 flex gap-6 items-center justify-center">
        <Service
          title="Web development"
          description="Web app, ecommerce"
          Icon={SiCreatereactapp}
        />
        <Service
          title="App development"
          description="Mobile app, Smartwatch app"
          Icon={GrAppleAppStore}
        />
        <Service
          title="Aws cloud"
          description="Cloud computing, Cloud services"
          Icon={FaAws}
        />
      </div>
    </div>
  );
};

export default Services;
