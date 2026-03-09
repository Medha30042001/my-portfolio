import React from "react";

const SkillIcon = ({ icon, label }) => {
  return (
    <div className="group relative flex flex-col items-center">

      <div className="text-5xl text-gray-300 group-hover:text-secondary transition">
        {icon}
      </div>

      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-sm transition">
        {label}
      </span>

    </div>
  );
};

export default SkillIcon;