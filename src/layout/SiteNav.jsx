import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"

export default function SiteNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink className="nav-link" to="/data">
                    <img src={logo} alt="Boost logo" />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className="nav-link" to="/tennis">Tennis</NavLink>
                        <NavLink className="nav-link" to="/climbing">Climbing</NavLink>
                        <NavLink className="nav-link" to="/rube_goldberg">Bowling</NavLink>
                        <NavLink className="nav-link" to="/results">Results</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
