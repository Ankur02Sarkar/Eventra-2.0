import React from "react";
import "./cart.css";
const Cart = ({ setShow, cart }) => {
  return (
    <div className="shopcart">
      <div className="name">
        <h2>Shopping Cart</h2>
        <button onClick={() => setShow(true)}>&#x274c;</button>
      </div>
    </div>
  );
};

export default Cart;
