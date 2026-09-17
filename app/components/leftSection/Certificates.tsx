import React from "react";
import Certificate from "./Certificate";

const Certificates = () => {
  return (
    <div>
      <h1 className="text-xl pb-2">Certificates</h1>
      <Certificate name="AI-901" />
      <Certificate name="PL-900" />
      <Certificate name="JLPT N2" />
      <hr className="my-4 text-gray-200 drop-shadow-2xl"></hr>
    </div>
  );
};

export default Certificates;
