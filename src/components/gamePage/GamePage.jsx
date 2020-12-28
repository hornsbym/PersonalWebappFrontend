import React, { Component } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import AWS_CONSTANTS from "../../aws_constants";
import GamePageHeader from './GamePageHeader';

class GamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pathToGameFolder: AWS_CONSTANTS.pathToBucket + "/" + props.gameName,
            gameDisplayName: null,
        }
    }

    componentDidMount () {
        this.getGameDetails()
    }

    getGameDetails() {
        fetch(`${AWS_CONSTANTS.pathToBucket}/${this.props.gameName}/gameInformation.json`)
            .then(gameInformation => {
                return gameInformation.json()
            })
            .then(jsonGameInformation => {
                this.setState({
                    gameDisplayName: jsonGameInformation.gameName
                })
            })
    }

    render() {
        let content = new UnityContent(
            this.state.pathToGameFolder + "/Build/" + this.props.gameName + "Builds.json",
            this.state.pathToGameFolder + "/Build/UnityLoader.js"
        );

        return (
            <div>
                <GamePageHeader gameDisplayName={this.state.gameDisplayName} />
                <div className="unityPlayerContainer">
                    <Unity unityContent={content} />
                </div>
            </div>
        )
    }
}

export default GamePage;