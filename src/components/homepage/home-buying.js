import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import "../css/Home.css";
import ShoppingCart from "../ShoppingCart";
import {
  takeAwayCost,
  addedCost,
  deletedItem,
  addedItem,
  currUser,
  logOutUser
} from "../../actions";
import HomeNavBar from "./home-navbar";

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false
    };
  }

  renderListOfItems() {
    return this.props.items.map(item => {
      return (
        <div className="allItems">
          <div className="singleItem">
            {" "}
            {item.brand} {<br></br>}
            {item.flavor} {<br></br>}
            Quantity: {item.quantity} {<br></br>} Cost: ${item.cost} {<br></br>}
            <Button
              variant="primary"
              size="sm"
              onClick={() => this.handleOnClickAddCost(item)}
            >
              Add
            </Button>
            <Button
              variant="secondary"
              size="sm"
              disabled={item.quantity == 0}
              onClick={() => this.handleOnClickTakeAwayCost(item)}
            >
              Delete
            </Button>
          </div>
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
  handleOnClickAddCost = currItem => {
    this.props.addedItem({ increment: 1, item: currItem });
    this.props.addedCost(currItem.cost);
  };
  handleOnClickTakeAwayCost = currItem => {
    this.props.deletedItem({ increment: 1, item: currItem });
    this.props.takeAwayCost(currItem.cost);
  };

  render() {
    return (
      <div>
        <HomeNavBar />
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
    selectedItem: state.selectedItem,
    totalCost: state.currentCost
  };
};

export default connect(mapStateToProps, {
  deletedItem,
  addedItem,
  currUser,
  logOutUser,
  addedCost,
  takeAwayCost
})(Template);

// let { signUp } = this.state;
// let location = this.props.history.location.state;
// let user = this.props.user;
// let username = "";

// // Check for sign up values
// if (location) {
//   username = location.username;
// } else if (user.username) {
//   username = user.username;
// }

// if (username) {
//   return (
//     <div>
//       <div className="headerHome">
//         {" "}
//         <h1 id="titleHome">QuickSnack</h1>
//         Shop away
//         <b>
//           <i> {username}!</i>
//         </b>
//       </div>

//       <div className="shoppingCart">
//         <ShoppingCart
//           selectedItems={this.props.selectedItem}
//           checkout={this.handleOnClickCheckout}
//           totalCost={this.props.totalCost}
//         />
//       </div>
//       <br></br>
//       <br></br>
//       {this.renderListOfItems()}
//       <Button variant="dark" size="sm" onClick={this.handleOnClickLogOut}>
//         Log out
//       </Button>
//     </div>
//   );
// }
// if (signUp) {
//   return <Redirect to={{ pathname: "/signup" }} />;
// }

// componentDidMount() {
//   const location = this.props.history.location;
//   // Check for sign up values
//   if (location) {
//     if (location.state) {
//       this.props.currUser(location.state);
//     }
//   }
// }
