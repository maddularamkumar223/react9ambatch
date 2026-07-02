import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/products">Products</Link>
      <Link to="/displayCart">Display Cart</Link>
      <Link to="/productsDataWithApi">Products With Api</Link>
    </>
  );
};

export default Navbar;
