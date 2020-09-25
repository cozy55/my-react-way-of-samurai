import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message = {p.message} likesCount = {p.likesCount} />);

    let newPostElement = React.createRef();
    let onAddPost = () =>{
        props.addPost();
    }

    let onPostChange = () =>{
        let text =newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className = {s.postsBlock}>
            <div>
                <div>
                    <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText} />
                </div>
                <button onClick = {onAddPost}>Add post</button>
                <h3>New posts</h3>
                <div  className = {s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;