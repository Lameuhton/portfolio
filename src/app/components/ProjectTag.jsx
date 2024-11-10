import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-primary-500 border-primary-500"
    : "text-[#ADB7BE] border-white hover:border-primary-500";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-xl md:text-lg cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
