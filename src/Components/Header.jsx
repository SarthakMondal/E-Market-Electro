import React from 'react';
import "../Styles/Header.css";
import Logo from "../Images/logo.png";

import { faBars, faUser, faBagShopping faUserPlus, faXmarkSquare, faHomeUser, faHistory, faCartPlus, faRightFromBracket, faUserCircle, faListCheck, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';

function Header() {

    const toggleMenu = (state) => {
        let menu = document.getElementById("navbar");
        if(state){
            menu.classList.add("menuOpen");
        }else{
            menu.classList.remove("menuOpen");
        }
    }

    return (
        <div>
            <header>
                <FontAwesomeIcon icon={faBars} onClick={() => toggleMenu(true)} id="bars"/>
                <NavLink to="/home"><img src={Logo} alt="Logo" /></NavLink>
                <div className="prfhld">
                    <FontAwesomeIcon icon={faUserCircle} id="avater-header"/>
                </div>
            </header>
            <nav id="navbar">
                <div className="crshld">
                    <FontAwesomeIcon icon={faXmarkSquare} id="cross" onClick={() => toggleMenu(false)}/>
                </div>
                <ul className="d-flex flex-column align-items-center">
                    <li><NavLink to="/home" onClick={() => toggleMenu(false)}><FontAwesomeIcon icon={faHomeUser} /> Discover Us</NavLink></li>
                    <li><NavLink to="/products" onClick={() => toggleMenu(false)}><FontAwesomeIcon icon={faListCheck} /> All Products</NavLink></li>
                    <li><NavLink to="/my-cart" onClick={() => toggleMenu(false)}><FontAwesomeIcon icon={faCartPlus} /> View Cart</NavLink></li>
                    <li><NavLink to="/track-order" onClick={() => toggleMenu(false)}><FontAwesomeIcon icon={faShoppingBasket} /> Track Order</NavLink></li>
                    <li><NavLink to="/order-history" onClick={() => toggleMenu(false)}><FontAwesomeIcon icon={faHistory} /> Order History</NavLink></li>
                    <li><NavLink to="/sign-up" onClick={() => toggleMenu(false)}><FontAwesomeIcon icon={faUserPlus} /> Signup</NavLink></li>
                    <li><NavLink to="/login" onClick={() => toggleMenu(false)}><FontAwesomeIcon icon={faRightFromBracket} /> Login</NavLink></li>
                    <li><NavLink to="/place-order" onClick={() => toggleMenu(false)}><FontAwesomeIcon icon={faBagShopping} /> Checkout</NavLink></li>
                    <li><NavLink to="/my-account" onClick={() => toggleMenu(false)}><FontAwesomeIcon icon={faUser} /> My Account</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header