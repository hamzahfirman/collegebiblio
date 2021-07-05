import React from "react";
import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./css/Home.css";
import { addedItem, currUser, logOutUser } from "../actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false
    };
  }
  renderListOfItems() {
    return this.props.items.map(item => {
      return (
        <div>
          {item.brand}, {item.color}, {item.size}
          <button onClick={() => this.props.addedItem(1)}>Select</button>
        </div>
      );
    });
  }

  //Event Handlers
  handleOnClickSignUp = () => {
    this.setState({ signUp: true });
  };

  handleOnClickLogOut = () => {
    this.props.logOutUser();
    this.props.history.push({ pathname: "/" });
  };
  handleOnClickCheckout = () => {
    this.props.history.push({ pathname: "/shipping-add" });
  };

  componentDidMount() {
    const location = this.props.history.location;
    // Check for sign up values
    if (location) {
      if (location.state) {
        this.props.currUser(location.state);
      }
    }
  }

  render() {
    let { signUp } = this.state;
    let location = this.props.history.location.state;
    let user = this.props.user;
    let username = "";

    // Check for sign up values
    if (location) {
      username = location.username;
    } else if (user.username) {
      username = user.username;
    }

    if (username) {
      return (
        <div>
          Shop away{" "}
          <b>
            <i>{username}</i>
          </b>
          <div>
            Shopping cart: {this.props.selectedItem}
            <button onClick={this.handleOnClickCheckout}>Checkout</button>
          </div>
          <br></br>
          <br></br>
          {this.renderListOfItems()}
          <Button onClick={this.handleOnClickLogOut}>Log out</Button>
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
// Notes:
// 'mapStateToProps' gets passed to connect as its first arg
// inorder to configure connect to ask Provider for data in
// store
const mapStateToProps = state => {
  return {
    items: state.items,
    user: state.user,
    selectedItem: state.selectedItem
  };
};

export default connect(mapStateToProps, {
  addedItem,
  currUser,
  logOutUser
})(Home);
