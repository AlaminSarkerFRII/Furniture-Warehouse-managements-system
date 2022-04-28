import React from "react";
import { Link } from "react-router-dom";
// import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="row d-flex bg-black text-white">
        <div className="col-md-6">
          <h2>About Us </h2>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            distinctio dolorum libero officia expedita, excepturi sapiente.
            Nulla harum aliquid eaque?
          </span>
        </div>
        <div className="col-md-6">
          <Link to="/">Home</Link>
          <Link to="products">Abouts</Link>
          <Link to="abouts">Products</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
