// NavBar.js
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" exact={true}>Home</NavLink>&nbsp;|&nbsp;
        <NavLink to="/directors" exact={true}>Directors</NavLink>&nbsp;|&nbsp;
        <NavLink to="/actors" exact={true}>Actors</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;