
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/products">Products</Link>
      <Link to="/displayCart">Display Cart</Link>
    </>
  );
};

export default Navbar;
