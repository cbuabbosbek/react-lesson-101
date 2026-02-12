import "./App.css";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/Movies";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Payment from "./pages/Payment";
import Shop from "./pages/Shop";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <nav>
        <div className="logo">A-SHOP</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
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
        <Route path="/movies" element={<Movies />}></Route>
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
