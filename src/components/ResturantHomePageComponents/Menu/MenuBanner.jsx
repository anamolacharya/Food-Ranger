import React from "react";
import Menu from "./Menu";
import menu1 from "../../../img/menu1.png";
import menu2 from "../../../img/menu2.png";
import menu3 from "../../../img/menu3.png";
import "../../../css/ResturantHomePage/menu.css";

function MenuBanner() {
  return (
    <div className="menu_banner">
      <Menu img={menu1} />
      <Menu img={menu2} />
      <Menu img={menu3} />
      <Menu img={menu1} />
      <Menu img={menu2} />
    </div>
  );
}

export default MenuBanner;
