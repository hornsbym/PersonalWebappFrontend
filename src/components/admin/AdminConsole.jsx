import React, { Component } from 'react'
import '../../styles.scss'
import Container from 'react-bootstrap/Container'
import Link from 'react-router-dom/Link'
import AdminHeader from './AdminHeader'
import { Redirect } from 'react-router'

class AdminConsole extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authenticated: (props.location.state === undefined) ? false : true
        }
    }

    render() {
        // Only displays the page if the user has been authenticated
        if (this.state.authenticated === true) {
            return(
                <Container fluid>
                    <AdminHeader title="Admin Console"/>
                    <Container>
                        <h3>Actions:</h3>
                        <ul>
                            <li><Link className="adminLink" to={{
                                pathname: "/admin/newGame",
                                state: {
                                    authenticated: true
                                }
                            }}>Add a new game</Link></li>
                            <li><Link className="adminLink" to={{
                                pathname: "/admin/editGame",
                                state: {
                                    authenticated: true
                                }
                            }}>Edit an existing game</Link></li>
                        </ul>
                    </Container>
                </Container>
            )
        } else {
            return(<Redirect to="/admin/login"></Redirect>)
        }

    }
}

export default AdminConsole