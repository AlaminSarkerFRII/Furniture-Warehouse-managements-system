import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase.initt";

const UploadProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  // get input data and  upload data on db
  const handleUpload = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const supplier = event.target.supplier.value;
    const quantity = event.target.quantity.value;
    const image = event.target.image.value;
    console.log(name, price);
    // upload product
    const url = "http://localhost:5000/uploadproduct";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        description,
        supplier,
        quantity,
        image,
      }),
      headers: {
        //take email and token
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast("Upload Successfully");
        event.target.reset();
      });
  };

  return (
    <div className="container">
      <h2 className="text-center text-info"> Add New product</h2>
      <div className="row justify-content-space-between mt-5 w-50 mx-auto">
        <div className="col-md-7">
          <form onSubmit={handleUpload}>
            <div class="form-group mb-2">
              <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Product name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="description"
                class="form-control mb-2"
                placeholder="description"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="supplier"
                class="form-control mb-2"
                placeholder="supplier name"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                name="price"
                class="form-control mb-2"
                placeholder="Price"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                name="quantity"
                class="form-control mb-2"
                placeholder="Quantity"
              />
            </div>
            <div class="form-group">
              <input
                type="url"
                name="image"
                class="form-control mb-2"
                placeholder="image url"
                id=""
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary mt-2 mb-3 text-center  w-100"
            >
              Upload
            </button>
          </form>
        </div>
        <div className="col-md-5">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_5tkzkblw.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default UploadProduct;
