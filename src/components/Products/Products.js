import React, { useEffect, useState } from "react";
import "./Product.css";
import { Button, Card } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center tex-warning mb-5">
        {" "}
        Inventory Services {products.length}
      </h1>

      <div className="row g-4 mb-5">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 cols-sm-12">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <p>$ {product.price}</p>
                  <p className="description">{product.description}</p>
                  <h4>{product.supplier}</h4>
                </Card.Text>
                <Button variant="primary">Booking</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
