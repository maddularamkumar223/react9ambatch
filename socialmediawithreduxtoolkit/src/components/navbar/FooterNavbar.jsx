import NavbarComponent from "./NavbarComponent";

const FooterNavbar = () => {
  let data = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Messages",
      path: "/messages",
    },
    {
      name: "Add Post",
      path: "/",
    },
    {
      name: "Search",
      path: "/",
    },
    {
      name: "Profile",
      path: "/",
    },
  ];

  return (
    <>
      <NavbarComponent data={data} />
    </>
  );
};

export default FooterNavbar;
