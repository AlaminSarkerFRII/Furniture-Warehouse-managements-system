import React from "react";
import orderImag from "../../../Assets/order-manage.png";

const Management = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-md-6">
          <h1>Order Management</h1>
          <p className="fs-5">
            Simplify order management with auto reorder points, in-depth
            reporting, and improved warehouse management and picking processes.
            Create purchase orders, sales orders, pick tickets, RMA's, and other
            essential documents. Receive products into your warehouse, track
            shipments, control order statuses, and more.
          </p>
        </div>
        <div className="col-md-6">
          <img src={orderImag} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Management;
