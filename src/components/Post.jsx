import { useContext } from "react";
import { IoTrashBin } from "react-icons/io5";
import {PostList} from "../store/PostListProvider";


const Post = ({post}) => {
    const {deletePost} = useContext(PostList);

    return(
        <>
        <div className="card post-card" style={{width: "25rem"}}>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" onClick={() => {deletePost(post.id)}}> <IoTrashBin />
            <span className="visually-hidden">unread messages</span>
        </span>

        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <div className="alert alert-info reactions" role="alert">
                This post has been viewed by {post.views} people !!
            </div>
            {post.tags.map((tag, i) => <span className="badge rounded-pill bg-warning text-dark m-1" key={i}>{tag}</span>)}
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className="mt-3">
                    <button type="button" className="btn btn-success">Likes<span className="badge badge-light">{post.reactions.likes}</span></button>
                </div>
                <div className="mt-3">
                    <button type="button" className="btn btn-danger">Dislikes<span className="badge badge-light">{post.reactions.dislikes}</span></button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Post;