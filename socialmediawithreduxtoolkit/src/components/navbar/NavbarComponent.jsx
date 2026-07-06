
import { Link, NavLink } from "react-router-dom";

const NavbarComponent = ({ data }) => {
  let styleUl = {
    display: "flex",
    alignItems: "center",
    justifyContent: "Space-between",
    width: "90%",
    listStyle:"none"
  };
  return (
    <ul style={styleUl}>
      {data.map((value) => {
        return (
          <li key={value.name}>
            <NavLink to={value.path}>{value.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarComponent;
