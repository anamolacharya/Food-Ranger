import "./css/App.css";
// import Footer from "./components/footer";
// import Navbar from "./components/Navbar";
// import SearchBar from "./components/SearchBar";
// import FoodBanner from "./components/FoodBanner";
// import TopOfferBanner from "./components/TopOfferBanner";
// import TopBlogs from "./components/TopBlogs";
// import Banner from "./components/Banner";

import Blog from "./pages/Blog";
import FoodPhotography from "./pages/FoodPhotography";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import SearchResult from "./pages/SearchResult";
import ResturantHomePage from "./pages/ResturantHomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/foodphotography" component={FoodPhotography} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/auth/login" component={SignIn} exact />
          <Route path="/auth/login/user" component={UserPage} exact />
          <Route
            path="/searchresult/:foodName"
            component={SearchResult}
            exact
          />
          <Route path="/:rId" component={ResturantHomePage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
