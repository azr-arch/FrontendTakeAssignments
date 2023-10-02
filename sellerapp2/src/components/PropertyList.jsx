import React, { useState, useCallback } from "react";
import FilterBtn from "./FilterBtn";
import data from "../data";
import Property from "./Property";
import { BiSolidHourglassTop } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

const PropertyList = () => {
  const [displayedProperty, setDisplayedProperty] = useState(6);
  const [locationParam, setLocationParam] = useSearchParams();

  let filterBy = locationParam.get("filter") || "newyork";

  const cities = ["New York", "Mumbai", "Paris", "London"];
  const SHOW_PROPERTY = 3;

  const onClick = useCallback(
    (e) => {
      let tab = e.target.dataset.value;
      if (tab === "newyork") {
        setLocationParam({});
      } else {
        setLocationParam({ filter: tab });
      }

      // Resetting displayedHotels back to initial value
      setDisplayedProperty(6);
    },
    [setLocationParam, setDisplayedProperty]
  );

  const handleShowMore = () => {
    setDisplayedProperty(displayedProperty + SHOW_PROPERTY);
  };

  //default filter would be newyork as it is very first tab
  let filteredData = data.filter((item) => item.address.location === filterBy);
  let hotelForThisPage = filteredData.slice(0, displayedProperty);

  return (
    <section className="flex flex-col items-start gap-4 bg-primary ">
      {/* Filter  */}
      <nav aria-label="filter" className="flex items-center gap-4 px-8">
        {cities.map((city, idx) => (
          <FilterBtn
            value={city}
            clickHandler={onClick}
            key={idx}
            selected={filterBy}
          />
        ))}
      </nav>

      {/* property grid  */}
      <div className="w-full grid grid-cols-3 gap-x-3 gap-y-5 place-items-center justify-center">
        {hotelForThisPage.map((hotel, idx) => (
          <Property
            key={idx}
            id={hotel.id}
            name={hotel.name}
            address={hotel.address}
            image={hotel.image}
            tag={hotel.tag}
            features={hotel.features}
            price={hotel.price}
            isPopular={hotel.isPopular}
          />
        ))}
      </div>

      {filteredData.length > displayedProperty && (
        <button
          className="bg-darkBlue text-white font-medium px-4 py-2 rounded-2xl flex items-center gap-2 mx-auto mt-5"
          onClick={handleShowMore}
        >
          <BiSolidHourglassTop />
          Show More
        </button>
      )}
    </section>
  );
};

export default PropertyList;
