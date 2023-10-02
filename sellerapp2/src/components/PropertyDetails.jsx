import React, { useState, useEffect } from "react";
import Property from "../components/Property";
import { useParams, Link } from "react-router-dom";

import data from "../data";

const PropertyDetails = () => {
  const [currProperty, setCurrProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrProperty = () => {
      const res = data.filter((item) => item.id.toString() === id)[0];
      setCurrProperty(res);
    };

    fetchCurrProperty();
  }, [id]);

  if (!currProperty) return <p>Loading...</p>;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-primary">
      <Link to=".." className="bg-darkBlue text-white rounded-lg px-4 py-2 ">
        Back
      </Link>
      <Property
        id={currProperty?.id}
        image={currProperty?.image}
        name={currProperty?.name}
        address={currProperty?.address}
        tag={currProperty?.tag}
        isPopular={currProperty?.isPopular}
        features={currProperty?.features}
        price={currProperty?.price}
      />
    </div>
  );
};

export default PropertyDetails;
