import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import "./product.css";
const Product = ({ curElem, handleClick }) => {
  const { id, name, image, price, category } = curElem;
  return (
    <div className="product">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img src={image[0].url} alt={name} /> {/*  */}
            <figcaption className="caption">{category}</figcaption>
          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data--price">
                {<FormatPrice price={price} />}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
      <button onClick={() => handleClick(curElem)}>Add To Cart</button>
    </div>
  );
};

export default Product;
