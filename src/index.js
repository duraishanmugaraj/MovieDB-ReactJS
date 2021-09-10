import React from 'react'
import ReactDOM from 'react-dom'
import {
    HashRouter,
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import SingleMov from './components/SingleMov';
import NavBar from "./components/NavBar"
import "./index.css"

ReactDOM.render(
    <HashRouter basename='/'>
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <App />
            </Route>
            <Route path="/:id" exact>
                <SingleMov />
            </Route>
        </Switch>

    </HashRouter>
    ,
    document.getElementById('root')
)