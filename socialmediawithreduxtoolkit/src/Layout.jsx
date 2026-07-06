import HeaderNavbar from "./components/navbar/HeaderNavbar";

import FooterNavbar from "./components/navbar/FooterNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="socialMediaContainer">
      <nav className="headerNavbar">
        <HeaderNavbar />
      </nav>
      <section className="main_container">
        <Outlet />
      </section>
      <nav className="footer_navbar">
        <FooterNavbar />
      </nav>
    </main>
  );
};

export default Layout;
