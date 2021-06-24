import React from "react";
import TopOffer from "./TopOffer";
import offer1 from "../img/offer-1.jpg";
import offer2 from "../img/offer-2.jpg";
import "../css/topOfferBanner.css";

function TopOfferBanner() {
  return (
    <>
      <h1>Top Offers Today</h1>
      <div className="top_offer_banner">
        <TopOffer img={offer1} offerDetail="20% OFF for CHEEZY Burger!" />
        <TopOffer img={offer2} offerDetail="20% OFF on 24th April!" />
        <TopOffer
          img={offer1}
          offerDetail="Buy One CHEEZY Burger and Get another Free for your Partner!"
        />
        <TopOffer img={offer2} offerDetail="20% OFF on 24th April!" />
        {/* <TopOffer img="ads5.jpg" offerDetail="Top Offer Detail 5" /> */}
      </div>
    </>
  );
}

export default TopOfferBanner;
