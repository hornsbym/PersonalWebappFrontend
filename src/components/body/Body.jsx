import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Programming from "./Programming";
import Writing from "./Writing";
import Header from "./Header";
import Contact from "./Contact";
import EmailWidget from "./EmailWidget";

class Body extends Component {
    render(){
        return(
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Programming/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Writing/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Contact/>
                    </Col>
                </Row>
                {/*<EmailWidget/> */}
            </Container>
        )
    }
}

export default Body;