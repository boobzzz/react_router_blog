import React, { Component } from "react";
import { Route } from "react-router-dom";
import fetchJSON from "./lib/api.js";
import MainLayout from "./components/MainLayout/MainLayout";
import Post from "./components/Post/Post";

const url = 'http://localhost:3001/blog';

export default class App extends Component {
    state = {
        posts: []
    }

    componentDidMount = async () => {
        let { posts } = this.state;
        let data = await fetchJSON(url)

        this.setState({
            posts: [...posts, ...data.body]
        })
    }

    render() {
        let { posts } = this.state;

        return (
            <div>
                <MainLayout>
                    {posts.map(post =>
                        <Route
                            path={post.url}
                            render={() => <Post key={post.url} content={post} />} />
                    )}
                </MainLayout>
            </div>
        )
    }
}
