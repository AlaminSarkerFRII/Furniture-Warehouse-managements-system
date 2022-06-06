import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="text-center text-lg-start bg-dark text-white mt-10">
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </section>
    

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Furniture Warehouse
              </h6>
              <p>
              Furniture Warehouse is priced from $5.95 to $7.95, which means everything can be ordered for less than an astonishingly low $8!
              </p>
            </div>
            {/* <!-- Grid column -->
    
            <!-- Grid column --> */}
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" class="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" class="text-reset">React</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Laravel</a>
              </p>
            </div>
            {/* <!-- Grid column -->
    
            <!-- Grid column --> */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" class="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Help</a>
              </p>
            </div>
            {/* <!-- Grid column -->
    
            <!-- Grid column --> */}
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i class="fas fa-home me-3"></i> Mohammadpur,Dhaka-1207, Bangladesh </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                alamin.sarker4241@gmail.com
              </p>
              <p><i class="fas fa-phone me-3"></i> +880 1842414809</p>
              <p><i class="fas fa-print me-3"></i> +880 1740051568</p>
            </div>

          </div>

        </div>
      </section>

      <div class="text-center p-4">
        © 2022 Copyright:
        <a class="text-reset fw-bold" href="https://www.linkedin.com/feed/">Alamin Sarker</a>
      </div>
    </footer>
  );
};

export default Footer;
