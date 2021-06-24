import React from "react";
import "../css/searchPage/resturant.css";
import { useHistory } from "react-router-dom";
import Filter from "./searchPageComponents/Filter";
import Navbar from "./Navbar";

function Resturants(props) {
  let history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/${props.rId}`);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Available Option for {props.food} </h1>
      </div>

      <div className="resturant_option" onClick={handleClick}>
        <h1>{props.rName}</h1>
        <h2>Open: {props.rOpen}</h2>
        <h2>Close: {props.rClose}</h2>
        <h2>Resturant Type: {props.rType}</h2>
        <h2>Food Type: {props.rFType}</h2>
        <h2>
          {" "}
          Features: {props.rWFeature ? "Wifi Available" : "Wifi Unavailable"}
          {", "} {props.rACFeature ? "AC Available" : "AC Unavailable"},{" "}
          {props.rDFeature ? "Delivery Available" : "Delivery Unavailable"}
        </h2>
      </div>
      <Filter />
      {/* <h1 key={resturants._id}>
        Resturant Option for {foodName} is available in:
      </h1>
      <h2>{resturants.name}</h2>
      <h2>Open:{resturants.hour.open}</h2>
      <h2>Close: {resturants.hour.close}</h2>
      <h2>
        {resturants.features.wifi ? "Wifi Available" : "Wifi Unavailable"}
      </h2>
      <h2>{resturants.features.ac ? "AC Available" : "AC Unavailable"}</h2>
      <h2>
        {resturants.features.delivery
          ? "Delivery Available"
          : "Delivery Unavailable"}
      </h2> */}
    </>
  );
}

export default Resturants;
