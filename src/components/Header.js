import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logomhwilds.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar expand="xl" className="text-bg-warning ">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img
              src={logo}
              width="250"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarTogglerDemo02">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Accueil
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/armes"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Armes
              </Nav.Link>
              <Nav.Link as={NavLink} to="/monstres">
                Monstres
              </Nav.Link>
              <Nav.Link as={NavLink} to="/events">
                évènements
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
