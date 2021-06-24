import React from "react";
import "../../css/searchPage/filter.css";

function Filter() {
  return (
    <div className="filter">
      <div className="sort_type">
        <h3>Sort By</h3>

        <input type="checkbox" id="popularity" name="popularity" />
        <label for="popularity">Popularity</label>
        <br />
        <input type="checkbox" id="rating" name="rating" />
        <label for="rating">Rating</label>
        <br />
        <input type="checkbox" id="recently_added" name="recently_added" />
        <label for="recently_added">Recently Added</label>
        <br />

        {/* <input type="checkbox">Popularity</input> */}
      </div>
      <div className="Resturant Type">
        <h3>Resturant Type</h3>
        <input type="checkbox" id="fine_dining" name="fine_dining" />
        <label for="fine_dining">Fine Dining</label>
        <br />
        <input type="checkbox" id="fast_food" name="fast_food" />
        <label for="fast_food">Fast Food</label>
        <br />
        <input type="checkbox" id="food_cart" name="food_cart" />
        <label for="food_cart">Food Cart</label>
        <br />
        <input type="checkbox" id="rooftop" name="rooftop" />
        <label for="rooftop">Rooftop</label>
        <br />
        <input type="checkbox" id="poolside" name="poolside" />
        <label for="poolside">Poolside</label>
        <br />
      </div>
      <div className="Features">
        <h3>Features</h3>
        <input type="checkbox" id="wifi" name="wifi" />
        <label for="wifi">Wifi</label>
        <br />
        <input type="checkbox" id="air_conditioned" name="air_conditioned" />
        <label for="air_conditioned">Air Conditioned</label>
        <br />
        <input type="checkbox" id="reservation" name="reservation" />
        <label for="reservation">Reservation</label>
        <br />
        <input type="checkbox" id="delivery" name="delivery" />
        <label for="delivery">Delivery</label>
        <br />
        <input type="checkbox" id="smoking_zone" name="smoking_zone" />
        <label for="smoking_zone">Smoking Zone</label>
        <br />
        <input type="checkbox" id="parking" name="parking" />
        <label for="parking">Parking</label>
        <br />
      </div>
      <div className="filter_reset">
        <button>Filter</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default Filter;
