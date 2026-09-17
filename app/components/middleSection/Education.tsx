import React from "react";
import EducationDetail from "./EducationDetail";

interface EduProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const Education = ({ ref }: EduProps) => {
  return (
    <div ref={ref} className="flex flex-col pb-32 2xl:pb-40 items-center">
      <h1 className="text-4xl font-bold mb-16">Education</h1>
      <div className="w-full bg-component-background">
        <EducationDetail
          college="Tokyo IT Programming & Accounting College"
          date="Apr 2018 - Mar 2020"
          degree="Software Engineering"
          course="Studied software engineering."
        />
        <hr className="text-gray-200 mx-8" />
        <EducationDetail
          college="Kyoshin Language Academy"
          date="Oct 2016 - Mar 2018"
          degree="Japanese school"
          course="Studied japanese language."
        />
        <hr className="text-gray-200 mx-8" />
        <EducationDetail
          college="Oxford college of engineering and management"
          date="Apr 2014 - Mar 2016"
          degree="High school"
          course="Studied computer science."
        />
      </div>
    </div>
  );
};

export default Education;
