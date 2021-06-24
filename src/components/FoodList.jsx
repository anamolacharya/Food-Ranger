import React from "react";
import Food from "./Food";

function FoodList({ results }) {
  let data = [];
  if (results.data) {
    console.log(results);
    data = results.data.Search || [];
  }

  return (
    <div className="result">
      <Food />
    </div>
  );
}

export default FoodList;
