import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Main from './components/Main/Main';

export default class App extends Component {
    render() {

        return (
            <div>
                <Navigation />
                <hr/>
                <header>
                    <h3>Default Header</h3>
                </header>
                <Main />
                <footer>
                    <h3>Default Footer</h3>
                </footer>
            </div>
        )
    }
}
