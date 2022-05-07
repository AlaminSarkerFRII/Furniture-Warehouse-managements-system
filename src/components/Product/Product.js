import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [addQuantity, setAddQuantity] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setReload(false);
      });
  }, [productId, reload]);

  console.log(product);

  // update quantity

  const handleToUpdate = () => {
    const url = `http://localhost:5000/product/${productId}`;
    const updatedQuantity = parseInt(product.quantity) - 1;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        quantity: updatedQuantity,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setReload(true));
  };
  const handleAddQuantity = (e) => {
    const url = `http://localhost:5000/product/${productId}`;
    const updatedQuantity = parseInt(product.quantity) + parseInt(addQuantity);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        quantity: updatedQuantity,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(true);
        e.target.reset();
      });
  };

  return (
    <div className="container">
      <Card className="h-50 w-50 my-5">
        <Card.Img className="p-4" variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name} </Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text> Price : {product.price}</Card.Text>
          <Card.Text> Quantity : {product.quantity}</Card.Text>
          <Card.Text>Supplier : {product.supplier}</Card.Text>
          <Button variant="primary" onClick={handleToUpdate}>
            Delivered
          </Button>
        </Card.Body>
      </Card>

      <div className="mb-5">
        <input
          onChange={(e) => setAddQuantity(e.target.value)}
          type="number"
          placeholder="add quantity"
          value={addQuantity}
        />
        <button onClick={handleAddQuantity}> Add Quantity</button>
      </div>
    </div>
  );
};

export default Product;
