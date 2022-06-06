import React from "react";

const BannarLast = () => {
  return (
    <div class="row g-4 bg-light position-relative mb-5 mt-5 col-lg-12 col-sm-6 bg-gray">
      <form class="col-md-6 mb-md-0 p-md-4">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
      <div class="col-md-6 p-4 ps-md-0">
        <h5 class="mt-0">Get In Touch </h5>
        <p>
          Another instance of placeholder content for this other custom
          component. It is intended to mimic what some real-world content would
          look like, and we're using it here to give the component a bit of body
          and size.
        </p>
        <a href="#" class="stretched-link">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default BannarLast;
