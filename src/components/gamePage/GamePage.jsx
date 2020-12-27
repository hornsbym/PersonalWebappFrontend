import React, { Component } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import AWS_CONSTANTS from "../../aws_constants";
import Header from '../Header';
import GamePageHeader from './GamePageHeader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class GamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pathToGameFolder: AWS_CONSTANTS.pathToBucket + "/" + props.gameName
        }
    }

    render() {
        let content = new UnityContent(
            this.state.pathToGameFolder + "/Build/" + this.props.gameName + "Builds.json",
            this.state.pathToGameFolder + "/Build/UnityLoader.js"
        );

        return (
            <div>
                <GamePageHeader />
                <div className="unityPlayerContainer">
                    <Unity unityContent={content} />
                </div>
            </div>
        )
    }
}

export default GamePage;