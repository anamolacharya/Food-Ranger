import React from "react";
import FeaturedResturant from "./FeaturedResturant";
import madchef from "../../img/madchef.png";
import "../../css/searchPage/searchPageStyling.css";

function FeaturedResturantBanner() {
  return (
    <>
      <div className="featured_resturant">
        <div>
          <h3>Featured Resturants</h3>
        </div>
        <div className="featured_resturant_flex">
          <FeaturedResturant
            img={madchef}
            name="Mo:mo House"
            location="Euless, Texas"
          />
          <FeaturedResturant
            img={madchef}
            name="The Taste of Bengal"
            location="Chittagong"
          />
        </div>
        <div className="featured_resturant_flex">
          <FeaturedResturant
            img={madchef}
            name="Tandoori Chicken"
            location="Kathmandu"
          />
          <FeaturedResturant
            img={madchef}
            name="Burger House"
            location="Dallas, Texas"
          />
        </div>
      </div>
    </>
  );
}

export default FeaturedResturantBanner;
