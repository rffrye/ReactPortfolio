import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


const Footer = ()=> {
return (
    <div>
        <Container>
            <Navbar className="justify-content-center" expand="lg" fixed="bottom" variant="light" bg="light">
                <Navbar.Brand>Randall Frye • <a href = "mailto: randall.frye@gmail.com">randall.frye@gmail.com</a> • 306 Cook Rd Durham, NC • 828-228-5260</Navbar.Brand>
            </Navbar>
        </Container>
    </div>
    );
};

export default Footer;