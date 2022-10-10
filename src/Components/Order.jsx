import React from 'react';

import { useState, useEffect } from 'react';
import "../Styles/Orders.css";

function Order() {
  const [order, setOrder] = useState({});

  useEffect(() => {
    setOrder({
      id: "352853b4-12d7-43ab-b4d9-d612841c8684",
      orderedBy: "Jon Doe",
      contact: "9283012834",
      shippingAddress: "440-a, Anna Salai, Nandanam, Chennai, Tamil Nadu-600035, 440-a, Anna Salai, Nandanam, Chennai, Tamil Nadu-600035",
      totalPrice: 70000,
      paymentStatus: "PAID",
      paymentMethod: "CARD",
      orderDetails: "Dell-Inspriron-Laptop: 1, Sony-Headphone: 1, Wireless-Mouse: 2, Dell-Inspriron-Laptop: 1, Sony-Headphone: 1, Wireless-Mouse: 2",
      deliveryStage: 2
    })
  }, [])

  return (
    <div className="container-fluid">
      <div className="row" id="wrapper-order">
        <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
          <h2>Track Your Order Status Here</h2>
          <div className="card">
            <div className="card-body">
              <div className="data-wrap">
                <h3><b>Order-Id:</b> {order.id}</h3>
                <h4><b>Ordered-By:</b> {order.orderedBy}, <b>Phone-No: </b>{order.contact}</h4>
                <h4 style={{ marginBottom: "15px" }}> <b>Total Price: Rs.</b> {order.totalPrice} /-, <b>Payment-Method:</b> {order.paymentMethod}, <b>Payment-Status:</b> {order.paymentStatus}</h4>
                <h5><b>Ordered-Items:</b> {order.orderDetails}</h5>
                <h5><b>Shipping-Address:</b> {order.shippingAddress}</h5>
              </div>
              <div className="track-wrap">
                <div className="bar-wrap d-flex align-items-center justify-content-center">
                  <div class="progress">
                    <div class="progress-bar" style={{width: order.deliveryStage == 1 ? "33%" : order.deliveryStage == 2 ? "66%" : "100%"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="index-wrap d-flex align-items-center justify-content-center">
                  <ul >
                    <li className="d-flex flex-column align-items-center justify-content-center">
                      <div className="crcl" style={{ backgroundColor: order.deliveryStage >= 1 ? "var(--primarybg)" : "white" }}>1</div>
                      <h6>Order Placed</h6>
                    </li>
                    <li className="d-flex flex-column align-items-center justify-content-center">
                      <div className="crcl" style={{ backgroundColor: order.deliveryStage >= 2 ? "var(--primarybg)" : "white" }}>2</div>
                      <h6>Out For Delivery</h6>
                    </li>
                    <li className="d-flex flex-column align-items-center justify-content-center">
                      <div className="crcl" style={{ backgroundColor: order.deliveryStage == 3 ? "var(--primarybg)" : "white" }}>3</div>
                      <h6>Delivery Completed</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order