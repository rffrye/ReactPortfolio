import React from "react";
import Form from 'react-bootstrap/Form'
import  Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import WebDev from "../imgs/webdev.png"
import Insta from "../imgs/Insta.png"
import Linked from "../imgs/Linked.png"
import GitHub from "../imgs/GitHub.png"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Contact = ()=> {
return (
      <div>
        <Row>
            <Col md={1}></Col>
            <Col md={5}>
                <Container style={{margin:"40px", border:"solid black", borderRadius:"10px", borderWidth:"8px", boxShadow:"6px 8px 5px lightgray", padding:"15px"}}>
                <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="ex. John Doe" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="ex. John Doe" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="johndoe@example.com" />
                        </Form.Group>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>Send Feedback</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        <br/>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form> 
                </Container>
            </Col>
            <Col md={5}>
                <Image src={WebDev} rounded style={{margin:"40px", maxHeight:"426px", boxShadow:"6px 8px 5px lightgray"}}/>
            </Col>
            <Col md={1}></Col>
        </Row>
        <Row style={{marginTop:"80px"}}>
            <Col md={4}>
                <a href="https://github.com/rffrye"><Image  src={GitHub} rounded style={{maxWidth:"90px"}}/></a>
            </Col>
            <Col md={4}>
                <a href="https://www.linkedin.com/in/randall-frye-89a66b77/"><Image  src={Linked} rounded style={{maxWidth:"90px"}}/></a>
            </Col>
            <Col md={4}>
                <a href="https://www.instagram.com/rffrye_designs/"><Image  src={Insta} rounded style={{maxWidth:"90px"}}/></a>
            </Col>
        </Row>
    </div>  
    );
};

export default Contact;