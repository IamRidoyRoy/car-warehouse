import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Car WareHouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            {
                                user && <>

                                    <Nav.Link as={Link} to="/inventoryitem">Manage Item</Nav.Link>
                                    <Nav.Link as={Link} to="/inventoryitem">Add item</Nav.Link>
                                    <Nav.Link as={Link} to="/inventoryitem">My items</Nav.Link>

                                </>
                            }
                            <Nav.Link as={Link} to="manageinventory">Manage Inventory</Nav.Link>

                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}><b>Signout</b></button>
                                    : <Nav.Link eventKey={2} as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;