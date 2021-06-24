import React from "react";
import "../css/topOfferBanner.css";

function TopOffer(props) {
  return (
    <>
      <div className="top_offer">
        <img className="top_offer_img" src={props.img} />
        <h1>{props.offerDetail}</h1>

        <p className="top_offer_detail"> Top Offer Detail </p>
      </div>
    </>
  );
}

export default TopOffer;
