import React, {useState} from 'react';
import useGlobalState from '../services/globalStateService'
import {Row, Col, Card, Button, Form} from "react-bootstrap";
import '../styles.css';

function HomeScene() {
    let globalState = useGlobalState();
    const [name, setName] = useState();

    const changeName = () => {
        globalState.updateApp({user_name: name})
    }

    return (
        <div className="container text-center">
            <h1>Hey there!</h1>
            <h3>This is a sample app to show I can use React.</h3>
            <Row className="my-4">
                <Col>
                    <Card>
                        <Card.Header>
                            <h4>Change your name</h4>
                        </Card.Header>
                        <Card.Body>
                            <p>Change the name by using this input</p>
                            <Form.Control onChange={ (e) => setName(e.target.value)} placeholder="User Name"/>
                            <Button onClick={ () => changeName()}>Change Name</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            <h4>Your Name</h4>
                        </Card.Header>
                        <Card.Body>
                            <h4 className="bold">{globalState.state.app.user_name}</h4>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <em>Don't see what you're looking for? Send me an email and I can make this more awesome.</em>

        </div>
    );
}

export default HomeScene;
