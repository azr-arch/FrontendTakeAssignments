import React from "react";
import { GoPeople } from "react-icons/go";
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { GiSteeringWheel } from "react-icons/gi";
import Divider from "./Divider";

const Feature = ({ icon, value }) => {
  return (
    <div className="flex items-center ">
      {icon}
      <p className="text-primary text-xs font-semibold capitalize">{value}</p>
    </div>
  );
};

const Car = ({ name, model, features, image, price }) => {
  const icons = {
    capacity: <GoPeople className="icon-style" />,
    fuelType: <LuFuel className="icon-style" />,
    mileage: <SlSpeedometer className="icon-style" />,
    transmission: <GiSteeringWheel className="icon-style" />,
  };

  return (
    <article className="bg-secondary flex flex-col justify-start  gap-4 p-3 rounded-2xl max-w-xs outline-1 outline outline-white shadow-xl ">
      {/* image conatiner */}
      <div className="rounded-2xl overflow-hidden max-h-44">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>

      {/* car's info */}
      <div className="flex flex-col items-start text-primary gap-3 px-2">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-medium text-lg">{name}</h2>
          <span className="p-1 border-dotted border border-poweder-blue rounded-md text-xs font-bold">
            {model}
          </span>
        </div>

        <div className="w-full grid grid-cols-2 gap-y-3">
          {Object.entries(features).map(([name, value]) => (
            <Feature key={name} icon={icons[name]} value={value} />
          ))}
        </div>
      </div>

      <Divider />

      {/* car's price and rent button  */}
      <div className="w-full flex items-center justify-between mb-2 px-2">
        <p className="text-lg font-medium">
          ${price}
          <span className="text-xs"> / month</span>
        </p>

        <button className="primary-btn">Rent Now</button>
      </div>
    </article>
  );
};

export default Car;
