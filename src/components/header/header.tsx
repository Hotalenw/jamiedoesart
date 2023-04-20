import './header.scss'
import {Link, Outlet} from "react-router-dom";

export const Header = () => {
  return (
    <div style={{padding: "1rem"}}>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand headerBrand">JamieDoesArt</span>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/art">My Art</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}