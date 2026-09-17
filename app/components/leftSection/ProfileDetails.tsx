import React from "react";
import ProfileDetail from "./ProfileDetail";

const ProfileDetails = () => {
  const age = (new Date().getFullYear() - 1994).toString();
  return (
    <div>
      <ProfileDetail title="Age" value={age} />
      <ProfileDetail
        title="Freelance"
        value="Available"
        textColor="text-success"
      />
      <ProfileDetail title="Address" value="Tokyo, Japan" />
      <hr className="my-4 text-gray-200 drop-shadow-2xl"></hr>
    </div>
  );
};

export default ProfileDetails;
