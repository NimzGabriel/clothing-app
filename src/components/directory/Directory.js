import React from "react";
import CategoryItem from "../category/CategoryItem";

import "./Directory.scss";

export default function Directory({ categories }) {
  return (
    <div className="categories-container">
      {
        categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))
      }
    </div>
  );
}
