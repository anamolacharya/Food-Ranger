import React from "react";
import FoodItem from "./FoodItem";
import burger from "../img/Burger.jpg";
import pizza from "../img/Pizza.jpg";
import coffee from "../img/Coffee.jpg";
import pasta from "../img/Pasta.jpg";
import snacks from "../img/Snacks.jpg";
import dumplings from "../img/Dumplings.png";
import "../css/foodBanner.css";

function FoodBanner() {
  return (
    <>
      <div className="food_banner">
        <FoodItem foodName="Burger" image={burger} />
        <FoodItem foodName="Pizza" image={pizza} />
        <FoodItem foodName="Pasta" image={pasta} />
        <FoodItem foodName="Coffee" image={coffee} />
        <FoodItem foodName="Snacks" image={snacks} />
        <FoodItem foodName="Dumplings" image={dumplings} />
      </div>
    </>
  );
}

export default FoodBanner;
