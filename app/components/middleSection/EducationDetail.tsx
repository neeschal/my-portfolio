import React from "react";

interface EduDetailProps {
  college: string;
  date: string;
  degree: string;
  course: string;
}
const EducationDetail = ({ college, date, degree, course }: EduDetailProps) => {
  return (
    <div className="flex justify-between px-10 py-12">
      <div className="flex-1/2">
        <div className="text-2xl">{college}</div>
        <p className="bg-primary text-sm text-white p-1 rounded mt-4 w-fit">
          {date}
        </p>
      </div>
      <div className="items-center flex-1/2">
        <h1 className="text-2xl">{degree}</h1>
        <p className="mt-4 text-paragraph">{course}</p>
      </div>
    </div>
  );
};

export default EducationDetail;
