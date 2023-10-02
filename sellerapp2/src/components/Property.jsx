import React from "react";
import { GrLocationPin } from "react-icons/gr";
import { BsFillBuildingsFill } from "react-icons/bs";
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";
import { SlSizeFullscreen } from "react-icons/sl";

import { Link } from "react-router-dom";

const Feature = ({ icon, value, placeholder }) => {
  if (placeholder === "area") placeholder = "sft";
  return (
    <div className="flex flex-col items-start gap-2">
      {icon}
      <p className="text-xs capitalize font-medium">
        {value} {placeholder}
      </p>
    </div>
  );
};

const Property = ({
  id,
  image,
  name,
  address,
  tag,
  isPopular,
  features,
  price,
}) => {
  const icons = {
    room: <BsFillBuildingsFill className="icon-style" />,
    bed: <LiaBedSolid className="icon-style" />,
    bath: <LiaBathSolid className="icon-style" />,
    area: <SlSizeFullscreen className="icon-style" />,
  };

  const featureEl = Object.entries(features).map(([name, value]) => (
    <Feature key={name} icon={icons[name]} value={value} placeholder={name} />
  ));

  return (
    <Link
      to={`/property/${id}`}
      className="relative bg-white flex flex-col justify-start rounded-2xl max-w-xs outline-1 outline outline-white shadow-xl gap-4 p-2 pb-6"
    >
      <div className="rounded-lg overflow-hidden max-h-44 relative aspect-square">
        <span
          aria-label="tag"
          className="bg-white text-secondary text-sm font-medium capitalize rounded-2xl flex items-center justify-center absolute top-3 left-3 py-1 px-3"
        >
          {tag}
        </span>

        <img src={image} alt={name} className="w-full h-full  object-cover" />
      </div>

      {/* info section  */}
      <div className="flex flex-col items-start gap-3 text-primary px-2">
        <div className="flex items-center gap-1">
          <GrLocationPin size={15} />
          <p className="text-xs font-medium capitalize">{address.landmark}</p>
        </div>

        <p className="text-lg font-medium leading-5">
          {name} - {address.street}
        </p>

        <div className="w-full flex items-center justify-around my-2">
          {featureEl}
        </div>
      </div>

      {/* price section  */}
      <div className="w-full flex items-center justify-between  px-2">
        <p className="text-secondary font-bold">
          ${price}{" "}
          <span className="text-primary text-xs font-semibold"> /month</span>
        </p>

        <button className="readmore-btn" aria-label="read-more">
          Read More
        </button>
      </div>

      {/* popular styling  */}
      {isPopular && <div className="popular"></div>}
    </Link>
  );
};

export default Property;
