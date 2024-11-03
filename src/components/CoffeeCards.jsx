import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
  const [coffees, setCoffees] = useState([]);
  const { category } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const filteredData = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredData);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [data, category]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>

      <button
        onClick={() => navigate("/coffees")}
        className="btn btn-warning my-4"
      >
        View All
      </button>
    </>
  );
};

export default CoffeeCards;
