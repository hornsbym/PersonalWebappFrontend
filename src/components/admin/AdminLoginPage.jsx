import React, { Component } from 'react'
import '../../styles.scss'
import Container from 'react-bootstrap/Container'
import GamePageHeader from '../gamePage/GamePageHeader'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AWS_CONSTANTS from "../../aws_constants"
import { Link, Redirect } from 'react-router-dom'

class AdminLoginPage extends Component {
    constructor(props) {
        super(props) 

        this.userRef = React.createRef()
        this.passRef = React.createRef()

        this.state = {
            redirect: null
        }
    }

    async verifyUser() {
        var payload = {
            username: this.userRef.current.value,
            password: this.passRef.current.value
        }

        console.log("Payload")
        console.log(payload)

        await fetch(AWS_CONSTANTS.verifyUserUrl, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
                return response.json()
        }).then(response => {
            let authenticated = response.body

            if (authenticated) {
                this.setState({
                    redirect:<Redirect to={{
                        pathname: "/admin",
                        state: {
                            authenticated: true
                        }
                    }}></Redirect>
                })
            } else {
                this.setState({
                    redirect: <p>Check username or password.</p>
                })
            }
        })
    }

    render() {
        return (
            <Container fluid>
                <GamePageHeader gameDisplayName="Admin Login" />
                <Container id="loginContainer">
                    <Row className="justify-content-md-center">
                        {this.state.redirect}
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="3"><p className="text-right">Username</p></Col>
                        <Col md="3">
                            <input ref={this.userRef}>
                            </input>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="3"><p className="text-right">Password</p></Col>
                        <Col md="3">
                            <input type='password' ref={this.passRef}>
                            </input>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md ="3">
                            {/* <Link to={{
                                pathname:"/admin",
                                state: {
                                    authenticated: true
                                }
                            }}>Login</Link> */}
                            <button onClick={this.verifyUser.bind(this)}>Login</button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default AdminLoginPage