import React from "react";

interface WorkDetailProps {
  jobTitle: string;
  date: string;
  company: string;
  detail: string;
}
const WorkDetail = ({ jobTitle, date, company, detail }: WorkDetailProps) => {
  return (
    <div className="flex justify-between px-10 py-12">
      <div className="flex-1/2">
        <div className="text-2xl">{jobTitle}</div>
        <p className="bg-primary text-sm text-white p-1 rounded mt-4 w-fit">
          {date}
        </p>
      </div>
      <div className="items-center flex-1/2">
        <h1 className="text-2xl">{company}</h1>
        <p className="mt-4 text-paragraph">{detail}</p>
      </div>
    </div>
  );
};

export default WorkDetail;
