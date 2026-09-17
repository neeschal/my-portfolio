import React from "react";
import { IconType } from "react-icons";

interface ServiceProps {
  title: string;
  description: string;
  Icon: IconType;
}

const Service = ({ title, description, Icon }: ServiceProps) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-component-background flex-1/3 h-60 pt-12">
      <Icon className="h-20 w-20 text-primary" />
      <h1 className="text-xl">{title}</h1>
      <p className="text-paragraph">{description}</p>
    </div>
  );
};

export default Service;
