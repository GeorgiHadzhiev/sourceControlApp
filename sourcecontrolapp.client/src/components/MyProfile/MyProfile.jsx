import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import classes from './MyProfile.module.css'
import { AuthContext } from '../../contexts/AuthContext.jsx'
import { useContext } from 'react'

function MyProfile() {

    const { user } = useContext(AuthContext);

    return (
        <Navbar expand="lg" className={`${classes.navbar}`}>
            <Container>
                <Navbar.Brand href="#home">{user.FirstName} {user.LastName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Home">Dashboard</Nav.Link>
                        <Nav.Link href="/Add">Create Repository</Nav.Link>
                        <Nav.Link href="/Logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyProfile;