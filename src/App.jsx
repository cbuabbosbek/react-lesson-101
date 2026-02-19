import "./App.css";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/Movies";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Payment from "./pages/Payment";
import Shop from "./pages/Shop";
import Movies from "./pages/Movies";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
        </Route>
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
