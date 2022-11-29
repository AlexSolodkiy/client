
import './Blog.css';
import { BlogCard } from './blogComponents/BlogCard';
import {posts} from '../shared/dataPosts.js'
import { Component } from 'react';

class Blog extends Component{

    state ={
        blogArr:JSON.parse(localStorage.getItem("likes")) || posts
    }

    likePost =pos =>{
            const temp  = [...this.state.blogArr];
            temp[pos].liked = !temp[pos].liked

            this.setState({
                blogArr:temp
            })
        
            localStorage.setItem("likes",JSON.stringify(temp))
    }   


    deletePost = (pos) =>{
        
        // posts.splice(pos,1);
        
        console.log(posts)
    }

   

   render(){
    const blogPost = this.state.blogArr.map((item,pos) => {
        return(
            <BlogCard
                key = {item.key}
                title = {item.title}
                liked = {item.liked }
                likePost = {() => this.likePost(pos)}
                description = {item.description}
                deletePost = {() => this.deletePost(pos)}
            />
        )
    })
    return(
        <div>
            <h1>Blog</h1>
            <div className="posts">
               {blogPost}
            </div>
            <div className="count">
                <button>Get posts</button>
            </div>
        </div>
    )
   }
}

export default Blog;