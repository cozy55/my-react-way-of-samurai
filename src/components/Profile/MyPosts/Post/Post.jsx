import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className = {s.item}>
            <img src = 'https://cdn130.picsart.com/293322299018201.png?type=webp&to=min&r=640' />
            
            {props.message}
            <div>
                <span>likes</span> {props.likesCount}
            </div>
       </div>
    )
}

export default Post;