import { useContext } from 'react';
import Post from './Post'
import { PostList as PostListData } from '../store/PostListProvider';
import Message from './Message'
import Loading from './Loading';

const PostList = () => {
    const {postList, fetching} = useContext(PostListData);

    return (
        <div className='postlistContainer'>
        {fetching && <Loading/>}    
        {!fetching && (postList.length>0 ? (postList.map((post) => <Post key={post.id} post={post}/>)) : <Message/>)}
        </div>
    )
}

export default PostList;