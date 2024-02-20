import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        <img src={logo} alt="Logo de la tienda" />
      </a>
      <div className="nav-links">
        <a href="/">Inicio</a>
        <ScrollLink to="cuadros" smooth={true} duration={500}>
          Cuadros
        </ScrollLink>
        <ScrollLink to="fotos" smooth={true} duration={500}>
          Fotos
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
