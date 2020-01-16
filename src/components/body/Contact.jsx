 import React, { Component } from 'react';
 import { Container, Table, Row, Col } from 'react-bootstrap';

class Contact extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h2>Contact</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Contact information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>(404)831-5311</td>
                                </tr>
                                <tr>
                                    <td>mitchellrh78@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact;