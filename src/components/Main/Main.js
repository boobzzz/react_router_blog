import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import fetchJSON from "../../lib/api.js";
import Home from "../../components/Home/Home";
import Post from "../../components/Post/Post";
import NotFound from "../../components/NotFound/NotFound";

const url = 'http://localhost:3001/blog';

export default class Main extends Component {
    state = {
        posts: []
    }

    componentDidMount = async () => {
        let data = await fetchJSON(url);

        this.setState({
            posts: data.body
        })
    }

    render() {
        let { posts } = this.state;

        return (
            <main>
                <Switch>
                    <Route path="/" exact render={() => <Home content={posts} />} />
                    {posts.map(post =>
                        <Route
                            path={post.url}
                            render={() => <Post key={post.url} content={post} />} />
                        )}
                    <Route component={NotFound} />
                </Switch>
            </main>
        )
    }
}
