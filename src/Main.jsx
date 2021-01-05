import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage.jsx';
import GamePage from './components/gamePage/GamePage.jsx';
import AWS_CONSTANTS from './aws_constants'
import AdminLoginPage from './components/admin/AdminLoginPage.jsx';
import AdminConsole from './components/admin/AdminConsole.jsx'
import EditGamePage from './components/admin/EditGamePage.jsx';
import SelectGameToEditPage from './components/admin/SelectGameToEditPage.jsx'

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
                    <Route exact path={"/" + gameName} render={(props) => (<GamePage {...props} gameName={gameName}/>)}/>
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
                    <Route exact path="/admin/login" component={AdminLoginPage}></Route>
                    <Route exact path="/admin/newGame" component={EditGamePage}></Route>
                    <Route exact path="/admin/editGame" component={SelectGameToEditPage}></Route>
                    <Route exact path="/admin" component={AdminConsole}></Route>
                </Switch>
            </main>
        )
    }
} 

export default Main