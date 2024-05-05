import { Container, Navbar, Nav } from "react-bootstrap";
import '../components/css/header.css';

export function Header() {
    return (
        <Navbar className="navbar-custom" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/" >
                    PetPal
                </Navbar.Brand>
                <Nav className="mx-auto">
                    <h1 className="text-center text-white">Help them find their forever homes!</h1>
                </Nav>
            </Container>
        </Navbar>
    )
}
