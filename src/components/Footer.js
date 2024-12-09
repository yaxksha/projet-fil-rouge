import { Link, NavLink } from "react-router-dom";
import logoCapcom from "../assets/img/capcom.png";
import { Nav } from "react-bootstrap";

function Footer() {
  return (
    // <footer>
    //   <nav className="menu">
    //     <ul>
    //       <li>
    //         <NavLink
    //           className={({ isActive }) => (isActive ? "active" : "")}
    //           to="/"
    //         >
    //           Accueil
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           className={({ isActive }) => (isActive ? "active" : "")}
    //           to="/armes"
    //         >
    //           Armes
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           className={({ isActive }) => (isActive ? "active" : "")}
    //           to="/"
    //         >
    //           Monstres
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           className={({ isActive }) => (isActive ? "active" : "")}
    //           to="/"
    //         >
    //           évènement
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           className={({ isActive }) => (isActive ? "active" : "")}
    //           to="/"
    //         >
    //           Contact
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div>
    //     <span>
    //       <p>
    //         <small>La licence Monster Hunter appartient à</small>
    //       </p>
    //       <a href="https://www.capcom.com/">
    //         <img src={logoCapcom} alt="Logo de capcom" />
    //       </a>
    //     </span>

    //     <NavLink id="mentionleg" to="/">
    //       Mentions légales
    //     </NavLink>
    //   </div>
    // </footer>
    <footer class="mt-auto  text-bg-warning bottom">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <Nav.Link as={NavLink} to="/" exact>
            Accueil
          </Nav.Link>
        </li>
        <li class="nav-item">
          <Nav.Link as={NavLink} to="/armes" exact>
            Armes
          </Nav.Link>
        </li>
        <li class="nav-item">
          <Nav.Link as={NavLink} to="/monstres" exact>
            Monstres
          </Nav.Link>
        </li>
        <li class="nav-item">
          <Nav.Link as={NavLink} to="/events" exact>
            Évènement
          </Nav.Link>
        </li>
        <li class="nav-item">
          <Nav.Link as={NavLink} to="/contact" exact>
            Contact
          </Nav.Link>
        </li>
      </ul>
      <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
      <span>
        <p>
          <small>La licence Monster Hunter appartient à</small>{" "}
          <a href="https://www.capcom.com/">
            <img src={logoCapcom} alt="Logo de capcom" width={100} />
          </a>
        </p>
      </span>
    </footer>
  );
}
export default Footer;
