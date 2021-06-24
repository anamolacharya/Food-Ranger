import React from "react";
import madchef from "../../img/madchef.png";

function FeaturedResturant(props) {
  return (
    <div>
      <div>
        <img src={props.img} alt="image need to be added" />
        <h4>{props.name}</h4>
        <h5>{props.location}</h5>
      </div>
    </div>
  );
}

export default FeaturedResturant;
