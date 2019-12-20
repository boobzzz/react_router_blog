import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';


export default class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        )
    }
}
