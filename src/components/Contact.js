import React from "react";
import Form from 'react-bootstrap/Form'
import  Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import WebDev from "../imgs/webdev.png"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Contact = ()=> {
return (
      <div>
          <br/>
          <br/>
        <Row>
            <Col xs={6}>
                <Container>
                <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First and Last Name</Form.Label>
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form> 
                </Container>
            </Col>
            <Col xs={6}>
                <Image src={WebDev} rounded style={{maxWidth:"100%"}}/>
            </Col>
        </Row>
        <Row>
            
        </Row>
    </div>  
    );
};

export default Contact;