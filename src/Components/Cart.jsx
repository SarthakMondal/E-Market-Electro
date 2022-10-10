import React from 'react';

import { useState, useEffect } from 'react';
import Product1 from "../Images/laptop.jpg";
import Product2 from "../Images/desktop.jpg";
import Product3 from "../Images/mobile.jpg";
import Product4 from "../Images/headphone.jpg";
import Product5 from "../Images/earbuds.jpg";
import "../Styles/Cart.css";

import { faTrash, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Cart() {

  const [cartItems, setCartItems] = useState([]);

  const incrementVal = (iId) => {
    setCartItems(cartItems.map((item) => 
      item.id === iId && item.qtn<=9 ? {...item, qtn: item.qtn+1}: item
    ));
   }

   const decrementVal = (iId) => {
     setCartItems(cartItems.map((item) => 
       item.id === iId && item.qtn>=2 ? {...item, qtn: item.qtn-1}: item
     ));
   }

   const removeItem = (iId) => {
     setCartItems(cartItems.filter((item) => 
       item.id !== iId
     ));
   }

  useEffect(() => {
    setCartItems([
      {
        id: "352853b4-12d7-43ab-b4d9-d612841c8684",
        items: "Dell-Inspriron-Laptop",
        img: Product1,
        price: 50000,
        qtn: 1,
      },
      {
        id: "9708a232-0d8b-4d7d-8065-029383fee271",
        items: "Boat-Wiress-Earbuds",
        img: Product5,
        price: 7000,
        qtn: 2,
      },
      {
        id: "8716d827-6f2c-4556-9d88-e12d029a7d0b",
        items: "Sony-Wireds-Headphone",
        img: Product4,
        price: 6000,
        qtn: 3,
      },
      {
        id: "887e189d-8df7-4113-aff8-2ed51e7090e5",
        items: "Hp-Desktop",
        img: Product2,
        price: 80000,
        qtn: 1
      },
      {
        id: "27a660ee-afa5-4ffc-9455-67dd01d0d86b",
        items: "Redmi 10A Android",
        img: Product3,
        price: 15000,
        qtn: 1
      }
    ]);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row" id="wrapper-cart">
        <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
          <h2>Your cart, click here to <a href="/place-order">Checkout</a></h2>
          <div className="orders-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Product-Image</th>
                  <th>Product-Name</th>
                  <th>Price(Rs.)</th>
                  <th>Qtn</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map(item => 
                    <tr>
                      <td><img src={item.img} alt="" /></td>
                      <td>{item.items}</td>
                      <td>{item.price} /-</td>
                      <td>
                        <div className="btn-wrap d-flex flex-row align-items-center justify-content-center">
                          <button onClick={() => incrementVal(item.id)}><FontAwesomeIcon icon={faPlus}/></button>
                          <input type="number" name="qtn" id="qtn" value={item.qtn}/>
                          <button onClick={() => decrementVal(item.id)}><FontAwesomeIcon icon={faMinus}/></button>
                        </div>
                      </td>
                      <td><button onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrash}/></button></td>
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

export default Cart