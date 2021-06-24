import React from "react";
import banner from "../img/Featured-Image3.jpg";
import "../css/banner.css";

function Banner() {
  return (
    <>
      <img className="banner_image" src={banner} alt="Banner Image" />
    </>
  );
}

export default Banner;
