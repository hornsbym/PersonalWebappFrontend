import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Unity, { UnityContent } from "react-unity-webgl";
import AWS_CONSTANTS from "../../aws_constants";
import GamePageHeader from './GamePageHeader';

class GamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pathToGameFolder: AWS_CONSTANTS.pathToBucket + "/" + props.gameName,
            gameDisplayName: null,
            gameGithubLink: null,
            gameDescription: null,
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
                console.log(`${AWS_CONSTANTS.pathToBucket}/${this.props.gameName}/gameInformation.json`)
                console.log(jsonGameInformation)

                this.setState({
                    gameDisplayName: jsonGameInformation.gameName,
                    gameGithubLink: jsonGameInformation.githubLink,
                    gameDescription: jsonGameInformation.gamePageDescription
                })
            })
    }

    render() {
        let content = new UnityContent(
            this.state.pathToGameFolder + "/Build/" + this.props.gameName + ".json",
            this.state.pathToGameFolder + "/Build/UnityLoader.js"
        );

        return (
            <div>
                <GamePageHeader gameDisplayName={this.state.gameDisplayName} />
                <section>
                    <div className="unityPlayerContainer">
                        <Unity unityContent={content} />
                    </div>
                </section>
                <section className="blueBackground gamePageDescriptionSection">
                        <Container>
                            <div>
                                <p><strong>Github: </strong><a className="githubLink" href={this.state.gameGithubLink}>{this.state.gameGithubLink}</a></p>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: this.state.gameDescription}}></div>
                        </Container>
                </section>
            </div>
        )
    }
}

export default GamePage;