import React from 'react';
import AppleLogo from "../Images/apple.png";
import PlayStoreLogo from "../Images/play.png";

import "../Styles/Footer.css";

import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="container-fluid">
            <div className="row" id="footer">
                <div className="col-sm-3">
                    <h3>Download Our Apps</h3>
                    <ul>
                        <a target="_blank" href="https://play.google.com/"><li><img src={PlayStoreLogo} alt="playstore" /></li></a>
                        <a target="_blank" href="https://www.apple.com/"><li><img src={AppleLogo} alt="applestore" /></li></a>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h3>Follow Us in Social Media</h3>
                    <ul>
                        <a target="_blank" href="https://www.facebook.com/"><li>FaceBook</li></a>
                        <a target="_blank" href="https://www.instagram.com/"><li>Instagram</li></a>
                        <a target="_blank" href="https://www.twitter.com/"><li>Twitter</li></a>
                        <a target="_blank" href="https://www.youtube.com/"><li>Youtube</li></a>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h3>Our Pertnerships</h3>
                    <ul>
                        <a target="_blank" href="https://www.amazon.com/"><li>Amazon</li></a>
                        <a target="_blank" href="https://www.paypal.com/in/home"><li>Paypal</li></a>
                        <a target="_blank" href="https://www.flipkart.com/"><li>Flipkart</li></a>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h3>Quick Links For You</h3>
                    <ul>
                        <NavLink to="/products"> <li>All Products</li></NavLink>
                        <NavLink to="/my-cart"><li>View Cart</li></NavLink>
                        <NavLink to="/track-order"><li>Track Order</li></NavLink>
                    </ul>
                </div>
            </div>
            <div className="row" id="footer">
                <div className="col-sm-12">
                    <h6>&copy; E-Market-Electro 2022 | All Rights Reserved</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer
