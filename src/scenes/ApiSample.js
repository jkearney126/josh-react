import React, {useEffect, useState} from "react";

const ApiSample = () => {
    const [posts, setPosts] = useState();

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    return(
        <div className="container">
            <h1>Here's a bunch of posts from an API</h1>
            {posts && posts.map( post => (
                <div className="post">
                    <span>{post.id.toString()}</span>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default ApiSample;