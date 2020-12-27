import React, { Component } from 'react';
import '../../styles.scss'
import AWS_CONSTANTS from "../../aws_constants"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ProfilePicture extends Component {
    render () {
        return(
            <Row>
                <Col />
                <Col />
                <Col>
                    <img id="profilePic" src={AWS_CONSTANTS.profilePicturePath} />
                </Col>
                <Col />
                <Col />
            </Row>
        )
    }
}

export default ProfilePicture;