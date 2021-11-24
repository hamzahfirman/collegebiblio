import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Home from "./components/homepage/home-content";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";
import About from "./components/About";
import ShippingAdd from "./components/forms/ShippingAdd";
import IsbnSearch from "./components/books/selling/selling-isbn";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/signin" component={SignIn} /> */}
        <Route path="/sellbook" component={IsbnSearch} />
      </Switch>
    </Router>
  );
};

export default App;
