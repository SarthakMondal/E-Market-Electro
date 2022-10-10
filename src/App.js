import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Header from "./Components/Header";
import Home from './Components/Home';
import Products from './Components/Products';
import Cart from "./Components/Cart";
import Order from './Components/Order';
import OrderHistory from './Components/OrderHistory';
import Checkout from './Components/Checkout';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/my-cart" element={<Cart />} />
        <Route exact path="/track-order" element={<Order />} />
        <Route exact path="/order-history" element={<OrderHistory />} />
        <Route exact path="/place-order" element={<Checkout />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/my-account" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
