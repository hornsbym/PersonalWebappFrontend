import React, { Component } from 'react'
import '../../styles.scss'
import Container from 'react-bootstrap/Container'
import AdminHeader from './AdminHeader'
import Row from 'react-bootstrap/Row'
import AWS_CONSTANTS from '../../aws_constants'
import { Redirect } from 'react-router'

class EditGamePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authenticated: (props.location.state === undefined) ? false : true
        }
    }

    render() {
        let header = (this.props.gameData == null) ? <AdminHeader title="Create new game" ></AdminHeader> : <AdminHeader title="Edit game"></AdminHeader>
        
        if (this.state.authenticated) {
            return (
                <Container fluid>
                    {header}
                    <Container>
                        <Row className="justify-content-center">
                            <form id="gameEditForm" action={AWS_CONSTANTS.addNewGameUrl} method="POST" encType="multipart/form-data">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="uniqueIdentifier">Unique game identifier:</label></td>
                                            <td><input type="text" name="uniqueIdentifier" id="uniqueIdentifier" ></input></td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="displayName">Game display name:</label></td>
                                            <td><input type="text" name="displayName" id="displayName" ></input></td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="gameBuildFolder">Build folder:</label></td>
                                            <td><input type="file" name="gameBuildFiles" id="gameBuildFolder" directory="" webkitdirectory=""></input></td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="gameDescriptions">Description:</label></td>
                                            <td><textarea type="text" name="gameDescriptions" id="gameDescriptions" cols={50} rows={6} /></td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="gamePhotos">Photos:</label></td>
                                            <td><input type="file" name="gamePhotos" id="gamePhotos" multiple /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                                                    <input type="submit" value="Submit" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </Row>
                    </Container>
                </Container>
            )
        } else {
            return (<Redirect to={{
                pathname: "/admin",
                state: {
                    authenticated: true
                }
            }}></Redirect>)
        }
    }
}

export default EditGamePage