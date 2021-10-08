import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'

 const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#Home">
                        homePage
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#Home2">Home2</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Container>

            </Navbar>
        </>
    )
}


export default Header
