import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import Headshot from "../imgs/Headshot.png"
import Insta from "../imgs/Insta.png"
import Linked from "../imgs/Linked.png"
import GitHub from "../imgs/GitHub.png"

const About = ()=> {
return (
    <div>
            <Row style={{marginTop:"80px"}}>
                <Col xs={1}></Col>
                <Col xs={6}>
                    <Row>
                        <h1>Randall Frye</h1>
                    </Row>
                    <Row>
                        <h3>Web Developer & Designer</h3>
                        <p style={{textAlign:"left", margin:"30px"}}>My name is Randall. I am a working Interior Designer, expanding my education, to include web development as a marketable skill. I am self-driven to be the best I can possibly be in any situation. I love to create! Whether that be a clients home or a web application, I can make any of your needs and wishes come true. I graduated from UNC Chapel Hill in 2013 and have returned, to the well-known and highly regarded university, to continue my education.</p> 
                        <p style={{textAlign:"left", margin:"30px", marginTop:"10px"}}>After graduating from UNC Coding Bootcamp, I will have all the necessary skills and knowledge to build Full Stack web applications. Proficient in MongoDB, MySQL, Git, HTML, CSS, React.js, jQuery, JavaScript, Node.js, and more.</p>
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
                </Col>
                <Col xs={5}>
                <Image src={Headshot} roundedCircle style={{width:"100%", margin: "30px"}}/>
                </Col>
            </Row>
    </div>
    );
};

export default About;