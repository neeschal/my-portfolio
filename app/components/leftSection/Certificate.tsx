import React from "react";
import { RiCertificate2Fill } from "react-icons/ri";

interface CertificateProps {
  name: string;
}

const Certificate = ({ name }: CertificateProps) => {
  return (
    <div className="flex gap-2 items-center">
      <RiCertificate2Fill className="text-primary text-xl" />
      <p>{name}</p>
    </div>
  );
};

export default Certificate;
