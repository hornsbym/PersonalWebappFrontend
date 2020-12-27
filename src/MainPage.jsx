import React, { Component } from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';
import IntroSection from './components/mainPage/IntroSection';
import GamePreviewRightComponent from './components/mainPage/GamePreviewComponent';
import GamePreviewSection from './components/mainPage/GamePreviewSection';

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

    createComponentsFromGameNames = () => {
        var linkLIArray = []
        var gamePreviewComponents = []

        var gameName;

        let isLeft = false
        for(gameName of this.props.gameNames) {
            var gameLink = <Link className="gameLink" to={"/" + gameName}>Play {gameName}</Link>
            gamePreviewComponents.push(<GamePreviewRightComponent gameName={gameName} gameLink={gameLink} isLeft={isLeft}/>)
            isLeft = !isLeft;
        }
        
        this.setState({
            linkLIs: linkLIArray,
            gamePreviewComponents: gamePreviewComponents
        })
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