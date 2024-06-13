import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import classes from './Home.module.css'
import { AuthContext } from '../../contexts/AuthContext.jsx'
import { useContext } from 'react'

function Home() {

    const { user } = useContext(AuthContext);

    return (
        <Navbar expand="lg" className={`${classes.navbar}`}>
            <Container>
                <Navbar.Brand href="#home">{user.FirstName} {user.LastName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">My Repos</Nav.Link>
                        <Nav.Link href="#link">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Home;