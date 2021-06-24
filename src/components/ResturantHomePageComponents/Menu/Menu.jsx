import React from "react";
import "../../../css/ResturantHomePage/menu.css";

function Menu(props) {
  return (
    <div className="menu">
      <img src={props.img} />
    </div>
  );
}

export default Menu;
