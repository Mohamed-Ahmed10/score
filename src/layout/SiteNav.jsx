import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"

export default function SiteNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Boost logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className="nav-link" to="/tennis">Tennis</NavLink>
                        <NavLink className="nav-link" to="/climbing">Data Climbing</NavLink>
                        <NavLink className="nav-link" to="/rube_goldberg">Rube goldberg</NavLink>
                        <NavLink className="nav-link" to="/">Data entries</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
