import React, { useEffect, useState } from "react";
import './OrderList.css'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.initt";

const OrderList = () => {
  const [user] = useAuthState(auth);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orderList`;
    fetch(url, {
      headers: {
        //take email and token
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [user.email]);
  return (
    <div className="container">
      <h2>OrderList : {orderList.length}</h2>
      <ol>
        {orderList.map((order) => (
          <li>
            {order.name}
            <span>
              <button> </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default OrderList;
