import React from "react";
import { Link } from "react-router-dom";
import pagenotfoundImage from "./assets/pagenotfound.gif";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <div className="cntr">
        <div className="txt">
          <h1>ERROR 404 !!!</h1>
          {/* <p>
            Uh Oh! We Looked Everywhere for this Page. Are you sure the URL is
            Correct 🤔 ?
            <br />
            <Link to="/">Click Here</Link> to go to Home Page
          </p> */}
        </div>
        <div className="imgwrapper">
          <img src={pagenotfoundImage} className="ErrImg" alt=""/>
        </div>
        <div className="txt">
          {/* <h1>ERROR 404 !!!</h1> */}
          <p>
            Uh Oh! We Looked Everywhere for this Page. Are you sure the URL is
            Correct 🤔 ?
            <br />
            <Link to="/">Click Here</Link> to go to Home Page
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
