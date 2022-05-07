import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import "./MyItems.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.initt";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [MyItems, setMyItems] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/MyItems`;
    fetch(url, {
      headers: {
        //take email and token
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user.email]);
  return (
    <div className="container">
      <h2>MyItems : {MyItems.length}</h2>
      <ol className="d-flex flex-column justify-content-center align-items-center">
        {MyItems.map((order) => (
          <li className="d-flex p-2 ">
            {order.name}
            <span>
              <button className="d-flex p-2  mx-3">
                <RiDeleteBinLine />
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyItems;
