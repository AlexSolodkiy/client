import React, {useState} from 'react';
import './Blog.css';
import { BlogCard } from './blogComponents/BlogCard';
import {posts} from '../shared/dataPosts.js'

function Blog(){


    const[hide,setHide] = useState(true);

    const addPost = posts.map((item) => {
        return(
            <BlogCard
                title = {item.title}
                description = {item.description}
            />
        )
    })

    return(
        <div>
            <h1>Blog</h1>
            <div className="posts">
               {addPost}
            </div>
            <div className="count">
                <button>Get posts</button>
            </div>
        </div>
    )
}

export default Blog;