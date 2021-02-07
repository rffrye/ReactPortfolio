import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Logo from "../imgs/Logo.png"

const NavBar = ()=> {
return (
    <div>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/"> <img src={Logo} width="70px"/>Randall Frye</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    );
};

export default NavBar;