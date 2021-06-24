import React from "react";
import "../css/foodBanner.css";

function FoodItem(props) {
  return (
    <>
      <div className="food_item">
        <h2 className="food_name">{props.foodName} </h2>
        <img className="food_item_img" src={props.image} />
      </div>
    </>
  );
}
export default FoodItem;
