import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage.jsx';
import GamePage from './components/gamePage/GamePage.jsx';
import AWS_CONSTANTS from './aws_constants'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gamePageRoutes: [],
            rootRoute: null,
            gameNames: []
        }
    }

    async getGames() {
        await fetch(AWS_CONSTANTS.getGameNamesApiUrl)
        .then((res) => {
            return res.json()
        })
        .then(jsonRes => {
            var gameNames = JSON.parse(jsonRes.body).gameNames

            // In this block, we are able to manipulate the game names directly
            // This is how we create the routes for the game pages.
            var gamePages = []
            for (let gameName of gameNames) {
                gamePages.push(
                    <Route path={"/" + gameName} render={(props) => (<GamePage {...props} gameName={gameName}/>)}/>
                )
            }

            // Change the component state here
            // We need to pass all game names to the main page so that it can make links to them
            this.setState({
                gamePageRoutes: gamePages,
                rootRoute: <Route exact path='/' render={(props) => <MainPage {...props} gameNames={gameNames} />} />
            })
        })
    }

    componentDidMount = () => {
        this.getGames();
    }

    render() {
        return (
            <main>
                <Switch>
                    {this.state.rootRoute}
                    {this.state.gamePageRoutes}
                </Switch>
            </main>
        )
    }
} 

export default Main