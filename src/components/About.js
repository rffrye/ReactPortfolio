import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import Headshot from "../imgs/Headshot.png"

const About = ()=> {
return (
    <div>
            <Row>
                <Col xs={1}></Col>
                <Col xs={6}>
                    <br/>
                    <h1>Randall Frye</h1>
                    <br/>
                    <h3>Web Developer & Designer</h3>
                    <p style={{textAlign:"left", margin:"30px"}}>My name is Randall. I am a working Interior Designer, expanding my education, to include web development as a marketable skill. I am self-driven to be the best I can possibly be in any situation. I love to create! Whether that be a clients home or a web application, I can make any of your needs and wishes come true. I graduated from UNC Chapel Hill in 2013 and have returned to the well-known and highly regarded school to continue my education. 
                    After graduating from UNC Coding Bootcamp, I will have all the necessary skills and knowledge to build Full Stack web applications. Proficient in MongoDB, MySQL, Git, HTML, CSS, React.js, jQuery, JavaScript, Node.js, and more.</p>
                </Col>
                <Col xs={4}>
                <Image src={Headshot} roundedCircle style={{width:"100%", marginTop: "30px"}}/>
                </Col>
                <Col xs={1}></Col>
            </Row>
    </div>
    );
};

export default About;