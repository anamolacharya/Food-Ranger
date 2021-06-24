import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Resturant from "../components/Resturants";
import Banner from "../components/Banner";
import Footer from "../components/footer";
import NearByResturantBanner from "../components/searchPageComponents/NearbyResturantBanner";
import FeaturedResturantBanner from "../components/searchPageComponents/FeaturedResturantBanner";

function SearchResult() {
  const foodName = useParams().foodName;
  // var foodName = "rice and curry";

  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch(`https://api.github.com/users`)
    axios.get(`http://localhost:4000/resturants`).then((response) => {
      var searched_foodName = response.data.filter((e) => {
        //console.log(searched_foodName);
        return e.menu.name.toLowerCase() === foodName.toLowerCase();
        //  console.log(z.menu.name);
        //console.log(searched_foodName);
      });
      //console.log(response.data[0].menu.name);
      console.log(searched_foodName);

      setData(searched_foodName);
    });
  }, [foodName]);

  if (data) {
    return (
      <>
        {/* <Banner /> */}
        {/* <SearchBar /> */}
        <ul>
          {data.map((resturant) => (
            <>
              <Resturant
                key={resturant._id}
                rId={resturant._id}
                food={foodName}
                rName={resturant.name}
                rOpen={resturant.hour.open}
                rClose={resturant.hour.close}
                rType={resturant.resturant_type}
                rFType={resturant.food_type}
                rWFeature={resturant.features.wifi}
                rACFeature={resturant.features.ac}
                rDFeature={resturant.features.delivery}
              />
            </>
          ))}
        </ul>
        <NearByResturantBanner />
        <FeaturedResturantBanner />
        <Footer />
      </>
    );
  }
}

export default SearchResult;

//
// useEffect(() => {
//   // fetch(`https://api.github.com/users`)
//   axios.get(`http://localhost:4000/resturants`).then((response) => {
//     var searched_foodName = response.data.filter((e) => {
//       //console.log(searched_foodName);
//       return e.menu.name.toLowerCase() === foodName.toLowerCase();
//       //  console.log(z.menu.name);
//       //console.log(searched_foodName);
//     });
//     //console.log(response.data[0].menu.name);
//     console.log(searched_foodName);

//     setData(searched_foodName);
//   });
// }, [foodName]);

// if (data) {
//   return (
//     <ul>
//       {data.map((resturants) => (
//         <>
//           <h1 key={resturants._id}>
//             Resturant Option for {foodName} is available in:
//           </h1>
//           <h2>{resturants.name}</h2>
//         </>
//       ))}
//     </ul>
//   );
// }
//
