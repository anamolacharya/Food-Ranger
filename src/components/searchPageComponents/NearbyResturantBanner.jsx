import React from "react";
import NearbyResturant from "./NearByResturant";
import madchef from "../../img/madchef.png";
import "../../css/searchPage/searchPageStyling.css";

function NearbyResturantBanner() {
  return (
    <>
      <div className="nearby_resturants">
        <div>
          <h3>Nearby Resturants</h3>
        </div>
        <div className="nearby_resturant_flex">
          <NearbyResturant
            img={madchef}
            name="Mo:mo House"
            location="Euless, Texas"
          />
          <NearbyResturant
            img={madchef}
            name="The Taste of Bengal"
            location="Chittagong"
          />
        </div>

        <div className="nearby_resturant_flex">
          <NearbyResturant
            img={madchef}
            name="Tandoori Chicken"
            location="Kathmandu"
          />
          <NearbyResturant
            img={madchef}
            name="Burger House"
            location="Dallas, Texas"
          />
        </div>
      </div>
    </>
  );
}

export default NearbyResturantBanner;
