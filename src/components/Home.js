import React from "react";
import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "./css/Home.css";

import ShippingAdd from "./forms/ShippingAdd";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false
    };
  }
  //Event Handlers
  handleOnClickSignUp = () => {
    this.setState({ signUp: true });
  };

  render() {
    let { signedIn, signUp } = this.state;
    let location = this.props.history.location;
    let username = "";

    // Check for sign up values
    if (location) {
      if (location.state) {
        username = location.state.username;
      }
    }
    if (username) {
      return (
        <div>
          Shop away{" "}
          <b>
            <i>{username}</i>
          </b>
          <ShippingAdd />
        </div>
      );
    }
    if (signUp) {
      return <Redirect to={{ pathname: "/signup" }} />;
    }
    return (
      <div>
        New?
        <div className="loginButtons">
          <Button
            variant="dark"
            size="sm"
            id="signIn"
            onClick={this.handleOnClickSignUp}
          >
            Sign up
          </Button>
          <Button variant="dark" size="sm" id="signIn">
            Log in
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
