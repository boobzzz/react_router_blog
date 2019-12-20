import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';


export default class App extends Component {
    render() {

        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        )
    }
}
