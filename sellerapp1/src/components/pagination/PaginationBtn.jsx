import React from "react";
import { useParams } from "react-router-dom";

const PaginationBtn = ({ type, isDisabled, value, clickHandler }) => {
  const { page: currentPage } = useParams();
  const selected = currentPage == value;

  const buttonClass = `flex items-center justify-center w-9 h-9 text-sm border rounded-md  ${
    selected ? "bg-black text-white cursor-default" : "border-slate-400"
  } ${isDisabled ? "cursor-not-allowed opacity-50" : ""}`;

  return (
    <button
      data-value={
        type === "prev" ? "previous" : type === "next" ? "next" : value
      }
      aria-label={
        type === "prev"
          ? "Go to Previous page"
          : type === "next"
          ? "Go to Next page"
          : `Go to page ${value}`
      }
      className={buttonClass}
      disabled={isDisabled}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
};

export default PaginationBtn;
