import React, { useState } from "react";
import "../css/App.css";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FoodBanner from "../components/FoodBanner";
import TopOfferBanner from "../components/TopOfferBanner";
import TopBlogs from "../components/TopBlogs";
import Banner from "../components/Banner";
import FoodList from "../components/FoodList";
import FoodSource from "../components/FoodSource";

function Home() {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await FoodSource.baseURL.get("/");

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <SearchBar onSearch={onSearch} />

      <FoodList results={state.results} />
      <FoodBanner />
      <TopOfferBanner />
      <TopBlogs />
      <Footer />
    </div>
  );
}

export default Home;
