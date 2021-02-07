import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


const Footer = ()=> {
return (
    <div>
        <Container>
            <Navbar className="justify-content-center" expand="lg" fixed="bottom" variant="light" bg="light">
                <Navbar.Brand >Randall Frye Portfolio 2021</Navbar.Brand>
            </Navbar>
        </Container>
    </div>
    );
};

export default Footer;