import React from "react";

const ShoppingCart = props => {
  return (
    <div>
      Shopping cart: {props.selectedItems}
      <br></br>
      Total Cost: $ {Math.floor(props.totalCost * 100) / 100}
      <br></br>
      <button onClick={props.checkout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
