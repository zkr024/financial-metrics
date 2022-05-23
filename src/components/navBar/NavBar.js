import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './style/navBar.css';

const NavBar = () => (
  <div className="header">
    <div className="homeIcon">
      <NavLink to="/">
        <FaHome className="home" />
      </NavLink>
    </div>
    <div className="titleHeader">
      Financial Statements
    </div>
  </div>
);

export default NavBar;
