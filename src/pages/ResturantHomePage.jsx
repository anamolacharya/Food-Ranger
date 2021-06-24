import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import "../css/searchPage/resturant.css";
import "../css/ResturantHomePage/offer.css";
import Navbar from "../components/Navbar";
import Review from "../components/ResturantHomePageComponents/Reviews/Review";
import TopOffer from "../components/TopOffer";
import offer1 from "../img/offer-1.jpg";
import offer2 from "../img/offer-2.jpg";
import MenuBanner from "../components/ResturantHomePageComponents/Menu/MenuBanner";
/*
What this page need to be!
- Check-  if user is not signed in, then redirect user to the sign in page and then redirect to the resturant's page.
- Import all the data for the  specific resturant 
- Import all the reviews for the resturant 
- Create a way to order a food in this page and add to cart. 
- 
*/

function ResturantHomePage() {
  function handleCart() {
    alert("Item is added into cart!");
  }

  //This line of code gets the resturant Id using useParams which can be later used to fetch data for a specific resturant
  let { rId } = useParams();

  const [resturant, setResturant] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  var ResturantName = resturant.name;
  //console.log(ResturantName);

  const getResturant = async () => {
    const response = await axios
      .get(`http://localhost:4000/resturants/${rId}`)
      .catch((err) => console.log("Error:", err));

    console.log("Resturant: ", response.data);

    if (response && response.data) setResturant(response.data);
  };

  useEffect(() => {
    getResturant();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/resturant/review`)
      .then((res) => {
        var resturant_review = res.data.filter((e) => {
          // console.log(e.review.resturant_name);
          return e.review.resturant_name === ResturantName;
        });
        // console.log(ResturantName);
        setReviewData(resturant_review);
      })
      .catch((err) => console.log("Error:", err));
  }, [ResturantName]);

  if (reviewData) {
    reviewData.map((r) => {
      console.log(r.service);
    });
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="r_name">
          <h1>{resturant.name}</h1>
        </div>
        {/* <p>
        Check- if user is not signed in, then redirect user to the sign in page
        and then redirect to the resturant's page.
      </p> */}

        <div className="r_detail">
          <h1>Resturant Detail</h1>
          <div className="r_contact">
            <h3>Contact Number</h3>
            <h4>800-234-FOOD</h4>
          </div>
          <div className="r_social">
            <h3>Socials</h3>
            <a href={resturant.social}>Facebook</a>
          </div>
          <div className="r_location">
            <h3>Location</h3>
            {/* <h4>{resturant.location.location_type}</h4> */}
          </div>
          <div className="g_map">
            <h3>Google map here!</h3>
          </div>

          <div className="r_type">
            <h3>Resturant Type</h3>
            <h5>{resturant.resturant_type}</h5>
          </div>
          <div className="r_foodtype">
            <h3>Resturant Food Type</h3>
            <h5>{resturant.food_type}</h5>
          </div>

          <div className="food_menu">
            <h3>Menu</h3>
            {/* <p>{resturant.menu.name}</p>
            <p>{resturant.menu.item_type}</p>
            <p>{resturant.menu.unit_price}</p> */}
          </div>
          <div className="order_now">
            <button>Order Now </button>
            <button onClick={handleCart}>Add to Cart</button>
          </div>

          <div className="r_features">
            <h3>Resturant Features</h3>
            {/* <p>
            {resturant.features.wifi ? "Wifi Available" : "Wifi Unavailable"}
          </p>
          <p>{resturant.features.ac ? "AC Available" : "AC Unavailable"}</p>
          <p>
            {resturant.features.delivery
              ? "Delivery Available"
              : "Delivery Unavailable"}
          </p> */}
          </div>
          <div className="r_hours">
            <h3>Resturant Hours</h3>
            {/* <p>{resturant.hour.open}</p>
            <p>{resturant.hour.close}</p> */}
          </div>
        </div>

        <div className="offers">
          <h2>Offers</h2>
          <div className="top_offer_banner">
            <TopOffer img={offer1} offerDetail="20% OFF for CHEEZY Burger!" />
            <TopOffer img={offer2} offerDetail="20% OFF on 24th April!" />
          </div>
        </div>
        <div className="Menu">
          <h2>Menu</h2>
          <MenuBanner />
        </div>
        <div className="Gallery">
          <h2>Gallery</h2>
        </div>
        <Review />

        <Footer />
      </div>
    </>
  );
}

export default ResturantHomePage;
