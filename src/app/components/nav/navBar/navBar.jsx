import './navBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="">Home</NavLink>
      <NavLink to="teamMember">About Us</NavLink>
      <NavLink to="favorites">Favorites</NavLink>
    </nav>
  );
}

export default NavBar;
