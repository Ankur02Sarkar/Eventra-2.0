import React, { useEffect, useState } from "react";
import "./cart.css";
const Cart = ({ setShow, cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += (item.stock * item.price) / 100));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div className="shopcart">
      <div className="name">
        <h2>Shopping Cart</h2>
        <button onClick={() => setShow(true)}>&#x274c;</button>
      </div>
      <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.image[0].url} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.stock}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Rs - {price}</span>
        </div>
      </article>
    </div>
  );
};

export default Cart;
