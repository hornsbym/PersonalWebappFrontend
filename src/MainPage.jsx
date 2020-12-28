import React, { Component } from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';
import IntroSection from './components/mainPage/IntroSection';
import GamePreviewRightComponent from './components/mainPage/GamePreviewComponent';
import GamePreviewSection from './components/mainPage/GamePreviewSection';
import AWS_CONSTANTS from './aws_constants';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            linkLIs: [],
            gamePreviewComponents: []
        }
    }

    componentDidMount = () => {
        this.createComponentsFromGameNames()
    }

    async createComponentsFromGameNames () {
        let isLeft = false
        for(let gameName of this.props.gameNames) {
            await fetch(`${AWS_CONSTANTS.pathToBucket}/${gameName}/gameInformation.json`)
                .then(gameInformation => {
                    return gameInformation.json() 
                })
                .then(jsonGameInformation => {
                    var gameLink = <Link className="gameLink" to={"/" + gameName}>Play {jsonGameInformation.gameName}</Link>
                    var component = <GamePreviewRightComponent 
                        gameName={gameName} 
                        gameDisplayName={jsonGameInformation.gameName} 
                        gameDescriptionArray={jsonGameInformation.gameDescriptionParagraphs}
                        gameLink={gameLink} 
                        isLeft={isLeft} />
                    
                    this.setState(prevState => ({
                        gamePreviewComponents: [...prevState.gamePreviewComponents, component]
                    }))

                    isLeft = !isLeft;
            })
        }
    }

    render() {
        return (
            <div>
                <IntroSection/>
                <GamePreviewSection gamePreviewComponents={this.state.gamePreviewComponents} />
            </div>
        )
    }
}

export default MainPage;