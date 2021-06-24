import React from "react";

import Footer from "../components/footer";
import SearchBar from "../components/SearchBar";
import FoodBanner from "../components/FoodBanner";
import TopOfferBanner from "../components/TopOfferBanner";
import TopBlogs from "../components/TopBlogs";
import Banner from "../components/Banner";
//import FoodList from "../components/FoodList";

function UserPage() {
  return (
    <>
      <h1>Welcome to the Portal {}!</h1>
      <Banner />
      <SearchBar />
      {/* <FoodList /> */}
      <FoodBanner />
      <TopOfferBanner />
      <TopBlogs />
      <Footer />
    </>
  );
}
export default UserPage;
