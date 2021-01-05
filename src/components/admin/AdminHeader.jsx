import React, { Component } from 'react'
import '../../styles.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AdminHeader extends Component {
    render() {
        return(
            <div id="adminHeader" className="header">
                <Row className="justify-content-center">
                    <Col xl="3">
                        <h2 className="text-center">{this.props.title}</h2>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AdminHeader