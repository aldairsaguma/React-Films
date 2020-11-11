import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
/** Components **/
import { HomeScreen } from '../components/films/HomeScreen';
import { Categories } from '../components/films/Categories';
import { NavBar } from '../components/films/NavBar';
import { Premiere } from '../components/films/Premiere';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
                <div className="body">
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/categories" component={Categories} />
                        <Route exact path="/premiere" component={Premiere} />
                        <Redirect to="/" />
                    </Switch>
                </div>
        </Router>
    )
}
