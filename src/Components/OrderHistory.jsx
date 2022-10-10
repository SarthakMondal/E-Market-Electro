import React from 'react';

import { useState, useEffect } from 'react';

import "../Styles/OrderHistory.css";

function OrderHistory() {

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    setOrderItems([
      {
        id: "352853b4-12d7-43ab-b4d9-d612841c8684",
        items: "Dell-Inspriron-Laptop: 1, Sony-Headphone: 1, Wireless-Mouse: 2",
        price: 70000,
        date: "10-02-2022",
        status: "DELIVERED"
      },
      {
        id: "9708a232-0d8b-4d7d-8065-029383fee271",
        items: "Dell-Inspriron-Laptop: 1, Sony-Headphone: 1, Wireless-Mouse: 2",
        price: 70000,
        date: "10-02-2022",
        status: "DELIVERED"
      },
      {
        id: "8716d827-6f2c-4556-9d88-e12d029a7d0b",
        items: "Dell-Inspriron-Laptop: 1, Sony-Headphone: 1, Wireless-Mouse: 2",
        price: 70000,
        date: "10-02-2022",
        status: "DELIVERED"
      },
      {
        id: "887e189d-8df7-4113-aff8-2ed51e7090e5",
        items: "Dell-Inspriron-Laptop: 1, Sony-Headphone: 1, Wireless-Mouse: 2",
        price: 70000,
        date: "10-02-2022",
        status: "DELIVERED"
      },
      {
        id: "27a660ee-afa5-4ffc-9455-67dd01d0d86b",
        items: "Dell-Inspriron-Laptop: 1, Sony-Headphone: 1, Wireless-Mouse: 2",
        price: 70000,
        date: "10-02-2022",
        status: "DELIVERED"
      }
    ]);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row" id="wrapper-orderhistory">
        <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
          <h2>Find Your Previous Orders Here</h2>
          <div className="orders-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Order-Id</th>
                  <th>Items-Ordered</th>
                  <th>Total-Price</th>
                  <th>Delivered-On</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  orderItems.map(item =>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.items}</td>
                      <td>{item.price}</td>
                      <td>{item.date}</td>
                      <td>{item.status}</td>
                    </tr>
                    
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory