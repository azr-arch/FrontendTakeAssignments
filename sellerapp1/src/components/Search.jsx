import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = ({ value, onChange }) => {
  return (
    <div className=" px-3 py-5 rounded-lg bg-primary shadow-2xl">
      <form className="w-fit flex items-center rounded-2xl overflow-hidden bg-white min-w-[300px] py-2 px-4">
        <input
          type="text"
          placeholder="Search..."
          className=" flex-grow min-h-full"
          value={value}
          onChange={onChange}
        />
        {/* disabled for now as it hold no purpose because search triggers on every change */}
        <button disabled aria-label="search" className="">
          <RiSearchLine size={20} />
        </button>
      </form>
    </div>
  );
};

export default Search;
