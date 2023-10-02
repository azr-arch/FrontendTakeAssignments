import React from "react";
import Car from "../components/Car";

const CarContainer = ({ carForThisPage }) => {
  return (
    <div className="relative grid grid-cols-3 flex-grow gap-4 items-center px-10 gap-y-9">
      {carForThisPage.length <= 0 ? (
        //absolute for aligning correctly because of grid display
        <p className="absolute left-1/2 -translate-x-1/2">No cars found!</p>
      ) : (
        carForThisPage.map((car, idx) => (
          <Car
            key={idx}
            name={car.name}
            model={car.model}
            price={car.price}
            features={car.features}
            image={car.image}
          />
        ))
      )}
    </div>
  );
};

export default CarContainer;
