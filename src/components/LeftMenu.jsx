import React from "react";
import ProfileCard from "./ProfileCard";

const LeftMenu = ({ type }) => {
  return (
    <div className=" flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div></div>
    </div>
  );
};

export default LeftMenu;
