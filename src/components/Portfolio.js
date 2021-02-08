import React from "react";
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import JustPick from "../imgs/JustPick.png"
import Port from "../imgs/Port.png"
import Codecarnival from "../imgs/CodeCarnival.png"
import Codequiz from "../imgs/CodeQuiz.png"
import Workout from "../imgs/data.png"
import Budget from "../imgs/Main.png"


const Portfolio = ()=> {
return (
    <div>
    <br/>
    <h1> Featured Projects</h1>
    <br/>
    <Container>
        <Row>
            <Col md={4}>
                <Card style={{margin:"20px"}}>
                    <Card.Img variant="top" src={Codecarnival}/>
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Header><a href="https://github.com/MichaelWitt/Code-Carnival">Git Hub</a>&ensp;|&ensp;<a href="https://code-carnival.herokuapp.com/">App</a></Card.Header>
                </Card>
            </Col>
            <Col md={4}>
                <Card style={{margin:"20px"}}>
                    <Card.Img variant="top" src={JustPick} />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Header><a href="https://github.com/MichaelWitt/Just-Pick">Git Hub</a>&ensp;|&ensp;<a href="https://michaelwitt.github.io/Just-Pick/">App</a></Card.Header>
                </Card>
            </Col>
            <Col md={4}>
                <Card style={{margin:"20px"}}>
                    <Card.Img variant="top" src={Port} />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Header><a href="https://github.com/rffrye/Homework2">Git Hub</a>&ensp;|&ensp;<a href="https://rffrye.github.io/Homework2/">App</a></Card.Header>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <Card style={{margin:"20px"}}>
                    <Card.Img variant="top" src={Codequiz} />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Header><a href="https://github.com/rffrye/Week-18-Budget-Tracker">Git Hub</a>&ensp;|&ensp;<a href="https://budgettrackerrf.herokuapp.com/">App</a></Card.Header>
                </Card>
            </Col>
            <Col md={4}>
                <Card style={{margin:"20px"}}>
                    <Card.Img variant="top" src={Workout} />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Header><a href="https://github.com/rffrye/Week-17-Homework">Git Hub</a>&ensp;|&ensp;<a href="https://randallworkouttracker.herokuapp.com/?id=6005f21bd47e350015c79254">App</a></Card.Header>
                </Card>
            </Col>
            <Col md={4}>
                <Card style={{margin:"20px"}}>
                    <Card.Img variant="top" src={Budget} />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text> 
                    </Card.Body>
                    <Card.Header><a href="https://github.com/rffrye/Week-18-Budget-Tracker">Git Hub</a>&ensp;|&ensp;<a href="https://budgettrackerrf.herokuapp.com/">App</a></Card.Header>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
    );
};

export default Portfolio;