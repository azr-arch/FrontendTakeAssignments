import React, { useState } from "react";
import data from "../data";
import { useParams, useSearchParams } from "react-router-dom";
import CarContainer from "../containers/CarContainer";
import Search from "../components/Search";
import Pagination from "../components/pagination/index";

const HomePage = () => {
  const { page } = useParams();
  const [searchParam, setSearchParam] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParam.get("q") || "");

  const totalPage = 10;
  const carsPerPage = 6;

  const allCars = [...data];

  const startIdx = (page - 1) * carsPerPage;
  const endIdx = startIdx + carsPerPage;

  //get car for current page
  const carForThisPage = allCars.slice(startIdx, endIdx);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value === "") {
      setSearchParam({});
    } else {
      setSearchParam({ q: e.target.value });
    }
  };

  let searchFilter = searchParam.get("q");

  const filteredCarData = searchFilter
    ? carForThisPage.filter((car) =>
        car.name.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : carForThisPage;

  return (
    <main className="min-h-screen flex flex-col justify-start flex-wrap bg-primary px-5 pb-5 gap-4">
      <Search value={searchValue} onChange={handleSearchChange} />
      <CarContainer carForThisPage={filteredCarData} />
      <Pagination totalPages={totalPage} startIdx={startIdx} endIdx={endIdx} />
    </main>
  );
};

export default HomePage;
