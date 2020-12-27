import React, { Component } from 'react';
import "../../styles.scss"
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

class GamePageHeader extends Component {
    render() {
        return(
            <div className="gamePageHeader">
                <Row justify-content-md-center>
                    <Col>
                        <Link id="homeLink" to="/">Home</Link>
                    </Col>
                    <Col/>
                    <Col/>
                    <Col md="auto">
                        <h3>Loooooong Title</h3>
                    </Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
            </div>
        )
    }
}

export default GamePageHeader