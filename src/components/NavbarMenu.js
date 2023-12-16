import { React} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import LogOut from '../components/auth/LogOut'


function NavbarMenu() {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container >
                    <Navbar.Brand as={Link} to='/'>home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/Textarea'>textarea</Nav.Link>
                            <Nav.Link as={Link} to='/ListGrammar'>List Grammar</Nav.Link>
                            <Nav.Link as={Link} to='/AddNewWord'>Add NewWord </Nav.Link>
                            <Nav.Link as={Link} to='/ListWords'>List Words </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <LogOut></LogOut>
                </Container>
            </Navbar>

        </>

    );
}

export default NavbarMenu;

