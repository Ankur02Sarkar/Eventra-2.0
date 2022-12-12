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
    <div className="wrap cf">
      <div className="name">
        <h1 className="projTitle">Shopping Cart</h1>
        <button onClick={() => setShow(true)}>&#x274c;</button>
      </div>

      <div className="heading cf">
        <h1>My Cart</h1>
        <a href="#" className="continue">
          Continue Shopping
        </a>
      </div>
      <div className="cart">
        {/* <ul className="tableHead">
      <li className="prodHeader">Product</li>
      <li>Quantity</li>
      <li>Total</li>
       <li>Remove</li>
    </ul> */}
        <ul className="cartWrap">
          {cart.map((item) => (
            
            //     {cart.map((item) => (

            //       <div className="cart_box" key={item.id}>
            //         <div className="cart_img">
            //           <img src={item.image[0].url} alt="" />
            //           <p>{item.title}</p>
            //         </div>
            //         <div>
            //           <button onClick={() => handleChange(item, 1)}>+</button>
            //           <button>{item.stock}</button>
            //           <button onClick={() => handleChange(item, -1)}>-</button>
            //         </div>
            //         <div>
            //           <span>{item.price}</span>
            //           <button onClick={() => handleRemove(item.id)}>Remove</button>
            //         </div>
            //       </div>

            //     ))}
            //     <div className="total">
            //       <span>Total Price of your Cart</span>
            //       <span>Rs - {price}</span>
            //     </div>
            //   </article>
            // </div>

            <li className="items" key={item.id}>
              {/* {console.log("curritem is:::", item)} */}
              <div className="infoWrap">
                <div className="cartSection">
                  <img src={item.image[0].url} alt="" className="itemImg" />
                  <p className="itemNumber">{item.id}</p>
                  <h3>{item.name}</h3>

                  <p>
                    {item.stock} x ₹{item.price / 100}
                  </p>
                  <br />
                  <div className="pricebtn">
                    <button onClick={() => handleChange(item, 1)}>+</button>
                    <button onClick={() => handleChange(item, -1)}>-</button>
                  </div>
                  <p className="stockStatus"> In Stock</p>
                </div>

                <div className="prodTotal cartSection">
                  <p>{price}</p>
                </div>
                <div className="cartSection removeWrap">
                  <a href="#" className="remove" onClick={() => handleRemove(item.id)}>
                    x
                  </a>
                </div>
              </div>
            </li>
          ))}
          {/* <li className="items even">Item 2</li> */}
        </ul>
      </div>

      {/* <div className="promoCode">
        <label for="promo">Have A Promo Code?</label>
        <input type="text" name="promo" placholder="Enter Code" />
        <a href="#" className="btn"></a>
      </div> */}

      <div className="subtotal cf">
        <ul>
          <li className="totalRow">
            <span className="label">Subtotal</span>
            <span className="value">₹{price}</span>
          </li>

          <li className="totalRow">
            <span className="label">Shipping</span>
            <span className="value">₹{10}</span>
          </li>

          <li className="totalRow">
            <span className="label">Tax</span>
            <span className="value">₹{20}</span>
          </li>
          <li className="totalRow final">
            <span className="label">Total</span>
            <span className="value">₹{price+30}</span>
          </li>
          <li className="totalRow">
            <a href="#" className="btn continue">
              Checkout
            </a>
          </li>
        </ul>
      </div>
    </div>

    // <div className="shopcart">
    //   <div className="name">
    //     <h2>Shopping Cart</h2>
    //     <button onClick={() => setShow(true)}>&#x274c;</button>
    //   </div>
    //   <article>
    //     {cart.map((item) => (

    //       <div className="cart_box" key={item.id}>
    //         <div className="cart_img">
    //           <img src={item.image[0].url} alt="" />
    //           <p>{item.title}</p>
    //         </div>
    //         <div>
    //           <button onClick={() => handleChange(item, 1)}>+</button>
    //           <button>{item.stock}</button>
    //           <button onClick={() => handleChange(item, -1)}>-</button>
    //         </div>
    //         <div>
    //           <span>{item.price}</span>
    //           <button onClick={() => handleRemove(item.id)}>Remove</button>
    //         </div>
    //       </div>

    //     ))}
    //     <div className="total">
    //       <span>Total Price of your Cart</span>
    //       <span>Rs - {price}</span>
    //     </div>
    //   </article>
    // </div>
  );
};

export default Cart;
