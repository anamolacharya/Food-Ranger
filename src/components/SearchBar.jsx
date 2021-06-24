import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../css/searchBar.css";
import axios from "axios";

function SearchBar(props) {
  const { onSearch } = props;
  const [data, setData] = useState([]);
  // const foodName = useParams().foodName;
  //console.log(foodName);
  //const foodName = " ";

  const handleInput = (e) => {
    // e.preventDefault();
    const foodName = e.target.value;
    console.log(foodName);
    setData(foodName);
    //history.push(`/searchresult/${foodName}`);
  };

  let history = useHistory();
  // function handleClick() {
  //   history.push("/searchresult");
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/searchresult/${data}`);
  };

  //const handleClick = (i) => {
  // handleInput();
  //const foodName = i.target.value;
  //console.log(foodName);
  //setData(foodName);
  // history.push(`/searchresult/${i.target.value}`);
  //};

  //This block of code is used when an user enters enter key to search the food
  // const handleEnterKeyPressed = (e) => {
  //   if (e.key === "Enter") {
  //     onSearch(data);
  //     //history.push("/searchresult");
  //   }
  // };

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

  // const url = "http://localhost:4000/resturants";
  // axios.get(url).then((res) => {
  //   foodNameSearch = res.data.results.map((item) => {
  //     return item.menu.name;
  //   });
  // });
  //console.log(foodNameSearch);

  return (
    <>
      <div className="search_bar">
        <form className="search_form" onSubmit={handleSubmit}>
          <input
            className="input"
            onChange={handleInput}
            // onKeyPress={handleEnterKeyPressed}
            type="text"
            // type="search"
            value={data}
            id="mySearch"
            placeholder="Search by Food"
            name="s"
          />
        </form>
        <form className="location_form">
          <input
            type="text"
            id="header-search"
            placeholder="Location"
            name="s"
          />
        </form>
        <button className="search_button" type="Submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;

/*
//Backup
function SearchBar(props) {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const foodName = e.target.value;
    setSearchText(foodName);
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  const url = "http://localhost:4000/resturants";
  axios.get(url).then((res) => {
    
  })

  return (
    <>
      <div className="search_bar">
        <form className="search_form">
          <input
            className="input"
            onChange={handleInput}
            onKeyPress={handleEnterKeyPressed}
            type="text"
            value={searchText}
            id="header-search"
            placeholder="Search by Food"
            name="s"
          />
        </form>
        <form className="location_form">
          <input
            type="text"
            id="header-search"
            placeholder="Location"
            name="s"
          />
        </form>
        <button className="search_button" type="Search">
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
*/
