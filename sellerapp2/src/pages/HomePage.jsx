import React from "react";
import PropertyList from "../components/PropertyList";

const HomePage = () => {
  return (
    <main className="flex flex-col justify-start  gap-11 px-6 py-4 bg-primary">
      <div className="flex flex-col items-center gap-3">
        <h1 className="  text-primary text-3xl font-bold">
          Featured Listed Property
        </h1>
        <p className="text-sm text-center  text-primary font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing
          <br /> eaque similique sed porro praesentium id quis voluptate
        </p>
      </div>
      <PropertyList />
    </main>
  );
};

export default HomePage;
