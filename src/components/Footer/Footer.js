import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
// import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-center text-white bg-dark">
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          <Link
            className="btn btn-link btn-floating btn-lg text-white m-1 fs-2"
            to="/home"
            data-mdb-ripple-color="white"
          >
            <RiFacebookCircleFill />
          </Link>
          <Link
            className="btn btn-link btn-floating btn-lg text-white m-1 fs-2"
            to="/home"
            data-mdb-ripple-color="white"
          >
            <FcGoogle />
          </Link>

          <Link
            className="btn btn-link btn-floating btn-lg text-white m-1 fs-2"
            to="/home"
            data-mdb-ripple-color="white"
          >
            <GrLinkedin></GrLinkedin>
          </Link>
          <Link
            className="btn btn-link btn-floating btn-lg text-white m-1 fs-2"
            to="/home"
            data-mdb-ripple-color="white"
          >
            <AiFillGithub />
          </Link>
          <div
            className="text-center p-3 "
            // style="background-color: rgba(0, 0, 0, 0.2);"
          >
            © 2022 Copyright:
            <Link className="text-white fs-2 px-3" to="/">
              Furniture Warehouse
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
