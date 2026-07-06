import NavbarComponent from "./NavbarComponent";

const HeaderNavbar = () => {
  let data = [
    {
      name: "logo",
      path: "/",
    },
    {
      name: "Notifications",
      path: "/notifications",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];
  return (
    <>
      <NavbarComponent data={data} />
    </>
  );
};

export default HeaderNavbar;
