import React from 'react';
import { useState, useEffect } from 'react';
import Product1 from "../Images/laptop.jpg";
import Product2 from "../Images/desktop.jpg";
import Product3 from "../Images/mobile.jpg";
import Product4 from "../Images/headphone.jpg";
import Product5 from "../Images/earbuds.jpg";

import { faSearch, faStar, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../Styles/Products.css";


function Products() {

  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(
      [{
        items: "Dell-Inspriron-Laptop",
        img: Product1,
        price: 50000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.0
      },
      {
        items: "Boat-Wiress-Earbuds",
        img: Product5,
        price: 7000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.5
      },
      {
        items: "Sony-Wireds-Headphone",
        img: Product4,
        price: 6000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.2
      },
      {
        items: "Hp-Desktop",
        img: Product2,
        price: 80000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.0
      },
      {
        items: "Redmi 10A Android",
        img: Product3,
        price: 15000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.3
      },
      {
        items: "Dell-Inspriron-Laptop",
        img: Product1,
        price: 50000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.0
      },
      {
        items: "Boat-Wiress-Earbuds",
        img: Product5,
        price: 7000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.5
      },
      {
        items: "Sony-Wireds-Headphone",
        img: Product4,
        price: 6000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.2
      },
      {
        items: "Hp-Desktop",
        img: Product2,
        price: 80000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.0
      },
      {
        items: "Redmi 10A Android",
        img: Product3,
        price: 15000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.3
      },
      {
        items: "Dell-Inspriron-Laptop",
        img: Product1,
        price: 50000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.0
      },
      {
        items: "Boat-Wiress-Earbuds",
        img: Product5,
        price: 7000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.5
      },
      {
        items: "Sony-Wireds-Headphone",
        img: Product4,
        price: 6000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.2
      },
      {
        items: "Hp-Desktop",
        img: Product2,
        price: 80000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.0
      },
      {
        items: "Redmi 10A Android",
        img: Product3,
        price: 15000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.3
      },
      {
        items: "Hp-Desktop",
        img: Product2,
        price: 80000,
        desc: "Electronic gadgets are appliances which work on technology or electronic technology. In simple example calculators is an electronic gadget. Using which we can calculate bigger amount easily",
        rating: 4.0
      }]
      )
  }, [])

  return (
    <div className="container-fluid">
      <div className="row" id="wrapper-searchsort">
        <div className="col-sm-9">
          <form>
            <input type="text" name="search" id="search" placeholder="Type sometihng...and Search"/>
            <button><FontAwesomeIcon icon={faSearch}/></button>
          </form>
        </div>
        <div className="col-sm-3">
          <form>
            <label htmlFor="sort">Sort By</label>
            <select name="sort" id="sort">
              <option value="Rating">Rating</option>
              <option value="Relevance">Relevance</option>
              <option value="Price">Price</option>
            </select>
          </form>
        </div>
      </div>
      <div className="row" id="wrapper-product">
        <div className="col-sm-12 d-flex flex-wrap justify-content-center">
          {
            product.map(item => 
              <div className="card">
                <div className="img-wrap">
                  <img src={item.img} alt="product" />
                </div>
                <div className="data-wrap">
                    <h4><b>Name:</b> {item.items}</h4>
                    <h4><b>Price:</b> Rs.{item.price}/-</h4>
                    <h6><b>Description:</b> {item.desc}</h6>
                    <h4><b>Ratings:</b> {item.rating} <FontAwesomeIcon icon={faStar} id="star"/></h4>
                    <button>Add to Cart <FontAwesomeIcon icon={faCartPlus}/></button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Products