import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import Navbar from "./navbar/Navbar"
import Body from "./body/Body"

class Site extends Component{
    render(){
        return(
            <Container fluid="true">
                <Row>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Body />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Site;