import React from "react";
import Navigation from "../Navigation/Navigation";

const MainLayout = (props) => {
    return (
        <div>
            <Navigation />
            <hr />
            <header>
                <h3>Header</h3>
            </header>
            <main>{props.children}</main>
            <footer>
                <h3>Footer</h3>
            </footer>
      </div>
    );
}

export default MainLayout;
