import React from "react";

interface ProfileDetailProps {
  title: string;
  value: string;
  textColor?: string;
}
const ProfileDetail = ({ title, value, textColor }: ProfileDetailProps) => {
  return (
    <div className="flex justify-between my-3">
      <p>
        <span className="bg-primary p-1">{title}:</span>
      </p>
      <p className={`${textColor ? textColor : ""} text-right`}>{value}</p>
    </div>
  );
};

export default ProfileDetail;
