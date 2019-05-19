import React from "react";

import CartItem from "./CartItem";

const Cart = props => (
  <React.Fragment>
    {props.cartItems.length > 0 &&
      props.cartItems.map((cartItem, index) => (
        <CartItem
          key={cartItem.id}
          item={cartItem}
          index={index}
          handleDeletingProduct={props.handleDeletingProduct}
        />
      ))}
  </React.Fragment>
);

export default Cart;
