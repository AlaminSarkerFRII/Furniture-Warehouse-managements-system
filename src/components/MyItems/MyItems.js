import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
// import "./Myitem.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.initt";
import { Button, Card, ToastContainer } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [Myitem, setMyitem] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://agile-river-34776.herokuapp.com/Myitem`;
    fetch(url, {
      headers: {
        //take email and token
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user.email]);

  useEffect(() => {
    fetch(`https://agile-river-34776.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  //  Delete Products

  const handleToDelete = (id) => {
    const confirmToDeletion = window.confirm("Are you sure , want to delete??");

    if (confirmToDeletion) {
      console.log("deleting", id);
      const url = `https://agile-river-34776.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleting", id);
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
            toast("Delete Successful");
          }
        });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center tex-warning mb-5">My Inventory Services</h1>

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
                    onClick={() => handleToDelete(product._id)}
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

export default MyItems;
