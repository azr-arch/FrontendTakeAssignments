import React from "react";

const FilterBtn = ({ clickHandler, value, selected }) => {
  const modifiedValue = value.replace(/\s+/g, "").toLowerCase(); // value with no spaces and in lowercase
  const isSelected = selected === modifiedValue;

  const buttonStyle = `flex items-center justify-center rounded-2xl ${
    isSelected ? "bg-darkBlue text-white" : "bg-secondary text-primary"
  } px-4 p-2 font-medium`;

  return (
    <button
      data-value={modifiedValue}
      className={buttonStyle}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
};

export default FilterBtn;
