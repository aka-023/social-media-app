// import { Form, redirect } from "react-router-dom";
import { useContext, useRef } from "react";
import {PostList} from "../store/PostListProvider";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const viewsElement = useRef();
    const tagsElement = useRef();
    const likesElement = useRef();
    const dislikesElement = useRef();

    const {addPost} = useContext(PostList);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const views = viewsElement.current.value;
        const tags = tagsElement.current.value.split(' ');
        const likes = likesElement.current.value;
        const dislikes = dislikesElement.current.value;
        const reactions = {
            likes, dislikes
        }
        
        userIdElement.current.value = '';
        postTitleElement.current.value = '';
        postBodyElement.current.value = '';
        viewsElement.current.value = '';
        tagsElement.current.value = '';     
        likesElement.current.value = '';   
        dislikesElement.current.value = ''; 

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: userId,
                title: postTitle,
                body: postBody,
                reactions: reactions,
                views: views,
                tags: tags
            })
          })
          .then(res => res.json())
          .then((post) => {
            if (!post.views) {
                post.views = views;
            }
            addPost(post);
            navigate("/");
          });  

    }
    
    // const {addPost} = useContext(PostList);
    return (
        <>
        <form className="createpost" onSubmit={handleSubmit}>

        <div className="form-group mb-3">
            <label htmlFor="userId">User Id</label>
            <input type="text" ref={userIdElement} name="userId" className="form-control" id="userId" placeholder="Enter Your User Id here..."/>
        </div>

        <div className="form-group mb-3">
            <label htmlFor="title">Post Title</label>
            <input type="text" name="title" ref={postTitleElement} className="form-control" id="title" placeholder="Enter Your Post Title here..."/>
        </div>

        <div className="form-group mb-3">
            <label htmlFor="body">Post Content</label>
            <textarea rows={4} type="text" name="body" ref={postBodyElement} className="form-control" id="body" placeholder="Tell Us More About it..."/>
        </div>

        <div className="form-group mb-3">
            <label htmlFor="views">Number of Views</label>
            <input type="text" name="views" ref={viewsElement} className="form-control" id="views" placeholder="How many users reacted to this post"/>
        </div>

        <div className="form-group mb-3">
            <label htmlFor="likes">Number of Likes</label>
            <input type="text"  name="likes" ref={likesElement} className="form-control" id="likes" placeholder="How many users liked to this post"/>
        </div>

        <div className="form-group mb-3">
            <label htmlFor="dislikes">Number of Dislikes</label>
            <input type="text" name="dislikes" ref={dislikesElement} className="form-control" id="dislikes" placeholder="How many users disliked to this post"/>
        </div>

        <div className="form-group mb-3">
            <label htmlFor="tags">Enter your Hashtags</label>
            <input type="text" name="tags" ref={tagsElement} className="form-control" id="tags" placeholder="Please enter your tags using space..."/>
        </div>
        
        <button type="submit" className="btn btn-primary">Post</button>
        </form>
        </>
    )
}

// export async function createPostAction(data) {
//     const formData = await data.request.formData();
//     const postData = Object.fromEntries(formData);
    
//     postData.tags = postData.tags.split(' ');
//     const reactions = {
//         likes: postData.likes,
//         dislikes: postData.dislikes
//     }
//     postData.reactions = reactions;
//     console.log(postData);
    
    // fetch('https://dummyjson.com/posts/add', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(postData)
    //   })
    //   .then(res => res.json())
    //   .then((post) => {
    //     // if (!post.views) {
    //     //     post.views = views;
    //     // }
    //     addPost(post);
    //   });  
      
//     return redirect("/");
// }

export default CreatePost;