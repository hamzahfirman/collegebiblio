import React from "react";
import { Button } from "react-bootstrap";
const ShoppingCart = props => {
  return (
    <div>
      Shopping cart: {props.selectedItems}
      <br></br>
      Total Cost: $ {Math.floor(props.totalCost * 100) / 100}
      <br></br>
      <Button
        disabled={props.totalCost == 0}
        variant="info"
        size="sm"
        onClick={props.checkout}
      >
        Checkout
      </Button>
    </div>
  );
};

export default ShoppingCart;
