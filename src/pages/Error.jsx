import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

import React from "react";

const Error = () => {
  return (
    <Wrapper className="container">
      <div>
        <img src={img} alt="not found" className="img" />
        <h3 className="title">Ohh! Page Not Found</h3>
        <p className="text">
          We can't seem to find the page you're looking for
        </p>
        <Link to="/" className="link">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
