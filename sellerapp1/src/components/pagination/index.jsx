import React from "react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import PaginationBtn from "./PaginationBtn";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Pagination = ({ totalPages, startIdx, endIdx }) => {
  const { page: currentPage } = useParams();
  const navigate = useNavigate();
  const searchParam = useSearchParams()[0]; // only need urlParams object

  const clickHandler = (e) => {
    // button type  i.e. prev || next || number
    const btnType = e.target.dataset.value;
    let pathToNavigate = "/page/";

    if (btnType === "previous") {
      if (currentPage === "1") return;

      pathToNavigate += parseInt(currentPage, 10) - 1;
    } else if (btnType === "next") {
      if (currentPage === "10") return;

      pathToNavigate += parseInt(currentPage, 10) + 1;
    } else {
      pathToNavigate += btnType;
    }

    //if any search keywords are there
    const searchFilter = searchParam.get("q");
    if (searchFilter) pathToNavigate += `?q=${searchFilter}`;

    navigate(pathToNavigate);
  };

  if (totalPages <= 1) return;

  return (
    <div className="px-5 py-4 flex items-center text-primary justify-center bg-primary shadow-xl rounded-lg">
      <div className="flex items-center gap-3 ">
        <PaginationBtn
          type="prev"
          isDisabled={currentPage === "1"}
          value={<GrFormPreviousLink size={30} pointerEvents="none" />}
          clickHandler={clickHandler}
        />

        {[...Array(totalPages)].map((_, idx) => (
          <PaginationBtn
            key={idx + 1}
            value={idx + 1}
            clickHandler={clickHandler}
          />
        ))}

        <PaginationBtn
          type="next"
          isDisabled={currentPage === "10"}
          value={<GrFormNextLink size={30} pointerEvents="none" />}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
};

export default Pagination;
