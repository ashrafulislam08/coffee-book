import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffees = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {data.map((card) => (
        <Card key={card.id} coffee={card} />
      ))}
    </div>
  );
};

export default Coffees;
