import React, { Component } from 'react'
import '../../styles.scss'
import AdminHeader from './AdminHeader'
import AWS_CONSTANTS from '../../aws_constants'
import Container from 'react-bootstrap/Container'
import { Redirect } from 'react-router'

class SelectGameToEditPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authenticated: (props.location.state === undefined) ? false : true,
            games: []
        }
    }

    componentDidMount = () => {
        this.getGames()
    }

    getGames() {
        fetch(AWS_CONSTANTS.getGameNamesApiUrl)
            .then((res) => {
                return res.json()
            })
            .then(jsonRes => {
                var gameNames = JSON.parse(jsonRes.body).gameNames

                for (let name of gameNames) {
                    let game = <li>{name}</li>
                    this.setState(prevState => ({
                        games: [...prevState.games, game]
                    }))
                }
            })
    }

    render() {
        if (this.state.authenticated) {
            return (
                <Container fluid>
                    <AdminHeader title="Select game to edit"></AdminHeader>
                    <Container>
                        <h3>Games:</h3>
                        <ul>
                            {this.state.games}
                        </ul>
                    </Container>
                </Container>
            )
        } else {
            return (<Redirect to="/admin/login"></Redirect>)
        }
    }
}

export default SelectGameToEditPage