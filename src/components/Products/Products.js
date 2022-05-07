import React, { useEffect, useState } from "react";
import "./Product.css";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.initt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // handle order

  const handleOrder = (product) => {
    const { _id } = product;

    navigate(`/product/${_id}`);
    // post order
    // fetch("http://localhost:5000/addOrder", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: user.email,
    //     name,
    //     price,
    //     image,
    //     description,
    //     supplier,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     toast(data.success);
    //   });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center tex-warning mb-5">
        Inventory Services {products.length}
      </h1>

      <div className="row g-4 mb-5">
        {products.map((product) => (
          <div key={product._id} className="col-lg-4 col-md-6 cols-sm-12">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <p className="text-danger fw-bold ">$ {product.price}</p>
                  <p className="description">{product.description}</p>
                  <p>{product.quantity}</p>
                  <p className="fw-bold">{product.supplier}</p>
                </Card.Text>
                <Button variant="primary" onClick={() => handleOrder(product)}>
                  Update Products
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
