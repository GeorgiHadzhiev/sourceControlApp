/* eslint-disable react-refresh/only-export-components */
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import classes from './MyProfile.module.css'
import { AuthContext } from '../../contexts/AuthContext.jsx'
import { routeGuardIfLoggedIn } from '../../HOCs/routeGuards.jsx'
import { useContext } from 'react'

function MyProfile() {

    const { user } = useContext(AuthContext);

    return (
        <Navbar expand="lg" className={`${classes.navbar}`}>
            <Container>
                <Navbar.Brand href="/MyProfile">{user.FirstName} {user.LastName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/Create">Create Repository</Nav.Link>
                        <Nav.Link href="/Logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default routeGuardIfLoggedIn(MyProfile);