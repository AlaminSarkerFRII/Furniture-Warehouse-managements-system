import React from "react";

const UploadProduct = () => {
  // get input data and  upload data on db
  const handleUpload = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    console.log(name, price);
    // upload product
    const url = "http://localhost:5000/uploadproduct";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        event.target.reset();
      });
  };

  return (
    <div className="container">
      <h2 className="text-center text-info"> upload product</h2>
      <div className="row mt-5 w-50 mx-auto">
        <div className="col-md-6">
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
                name="price"
                class="form-control mb-2"
                placeholder="Price"
              />
            </div>
            {/* <div class="form-group">
              <label for="exampleInputPassword1">imgae url</label>
              <input type="url" name="image" placeholder="image url" id="" />
            </div> */}
            <button type="submit" class="btn btn-primary mt-2 mb-3">
              Upload
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>imgage will be here</h2>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
