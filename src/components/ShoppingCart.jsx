import React from "react";

const ShoppingCart = props => {
  return (
    <div>
      Shopping cart: {props.selectedItems}
      <br></br>
      <button onClick={props.checkout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
