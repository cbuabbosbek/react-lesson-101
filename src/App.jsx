import "./App.css";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Payment from "./pages/Payment";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/Contacts">Contact</Link>
          </li>
          <li>
            <Link to="/Payment">Payment</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        {/* products */}
        {/* shop */}
        {/* cart */}
        {/* payment */}
        {/* contacts */}
      </Routes>
    </>
  );
}

export default App;
