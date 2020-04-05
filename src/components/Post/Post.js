import React from "react";

const Post = (props) => {
    return (
        <pre>
            {JSON.stringify(props.content, null, 2)}
        </pre>
    )
}

export default Post;
