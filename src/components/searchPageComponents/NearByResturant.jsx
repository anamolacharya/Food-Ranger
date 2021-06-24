import React from "react";

function NeabyResturant(props) {
  return (
    <div>
      <img src={props.img} alt="image need to be added" />
      <h4>{props.name}</h4>
      <h5>{props.location}</h5>
    </div>
  );
}

export default NeabyResturant;
