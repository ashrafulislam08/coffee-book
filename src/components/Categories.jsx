import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category, idx) => (
        <NavLink key={idx} role="tab" className="tab">
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
