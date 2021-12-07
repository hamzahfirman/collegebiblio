import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Home from "./components/homepage/home-content";
import HomeTemplate from "./components/homepage/home-template";
import SignUpNow from "./components/forms/sign-up";
import About from "./components/About";
import ShippingAdd from "./components/forms/ShippingAdd";
import IsbnSearch from "./components/books/selling/selling-isbn";
import BookDisplay from "./components/books/book-display";



const App = () => {
  return (
    <Router>
      <HomeTemplate>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUpNow} />
        <Route path="/sellbook" component={IsbnSearch} />
        <Route path="/bookdisplay" component={BookDisplay} />
      </Switch>
      </HomeTemplate>
    </Router>
  );
};

export default App;
