 import React, { Component } from 'react';
 import { Container, Table } from 'react-bootstrap';

class Contact extends Component{
    render(){
        return(
            <Container>
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
            </Container>
        )
    }
}

export default Contact;