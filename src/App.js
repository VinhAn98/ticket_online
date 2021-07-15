import React from 'react';
import './App.css';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
export const history = createBrowserHistory();

function App() {
    // render App
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/login" exact component={Login} />

                    {/*<Route path="/moive/:id" exact component={Movie} />*/}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
