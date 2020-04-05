import React from "react";

const Home = (props) => {
    return (
        <pre>
            {JSON.stringify(props.content, null, 2)}
        </pre>
    )
}

export default Home;
