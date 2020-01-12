import React from "react";

const Post = props => {
    return <pre>{JSON.stringify(props.content)}</pre>
}

export default Post;
