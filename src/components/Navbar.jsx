import { Link } from "react-router";

const Navbar = () => {
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
    </>
  );
};

export default Navbar;
