import React from "react";
import useGlobalState from "../services/globalStateService";
import {Row, Col, Card, Image, ListGroup} from "react-bootstrap";

const Profile = () => {
    let globalState = useGlobalState();

    return(
        <div className="container">
            <Row>
                <Col md={3}>
                    <Image src="http://joshk.co/images/JK-05.jpg" thumbnail width="200px"/>
                </Col>
                <Col>
                    <h1>I'm Josh</h1>
                    <p>I think your name might be: {globalState.state.app.user_name}</p>
                    <ListGroup>
                        <ListGroup.Item><strong>Email: </strong>josh@joshk.co</ListGroup.Item>
                        <ListGroup.Item><strong>GitHub: </strong>@jkearney126</ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            About Me
                        </Card.Header>
                        <Card.Body>
                            <p>I'm a full-stack developer that has worked with a lot of technologies like React (obviously), Django, React Native, CakePHP, Node....</p>
                            <p>I live in Tallahassee, FL</p>
                            <p>I play a lot of tennis</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Header>
                            Some Things I've Worked On
                        </Card.Header>
                        <Card.Body>
                            <h6><a href="https://thedwellings.tv" target="_blank">DwellingsTV</a></h6>
                            <h6><a href="https://jointoothly.com" target="_blank">Toothly</a></h6>
                            <h6><a href="https://nhuenergy.com" target="_blank">Nhu Energy</a></h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Profile;