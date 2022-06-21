import React from "react";

import "./CategoryItem.scss";

export default function CategoryItem({ category }) {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}