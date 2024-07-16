import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import logo from '../assets/favicon.svg'

// import webImage from '../assets/Web.png';

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar">
          <ul className="navlinks">
            <li >
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/projects">Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
