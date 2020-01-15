import React from "react";
import Navigation from "../Navigation/Navigation";

const MainLayout = (props) => {
    return (
        <div>
            <Navigation />
            <hr/>
            <header>
                <h3>Default Header</h3>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <h3>Default Footer</h3>
            </footer>
        </div>
    )
}

export default MainLayout;
