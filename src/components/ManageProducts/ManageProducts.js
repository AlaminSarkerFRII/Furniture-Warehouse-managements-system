import React, { useEffect, useState } from "react";
import { Button, Card, ToastContainer } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase.initt";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // handleToDelete Products

  const handleToDelete = () => {};

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
                  <p className="fw-bold">Quantity : {product.quantity}</p>
                  <p className="fw-bold">Supplier: {product.supplier}</p>
                </Card.Text>
                <div>
                  <Button
                    variant="primary"
                    onClick={() => handleToDelete(product)}
                  >
                    Delete Products
                  </Button>
                  <Button
                    onClick={() => navigate("/uploadProduct")}
                    className="mx-2"
                  >
                    Add Products
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageProducts;
