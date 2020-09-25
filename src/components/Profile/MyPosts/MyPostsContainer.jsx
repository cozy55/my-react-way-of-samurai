import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () =>{
            dispatch(addPostCreator())
        },
        updateNewPostText: (text) =>{
            dispatch(updateNewPostTextCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,{
    addPost:addPostCreator,
    updateNewPostText: updateNewPostTextCreator
})(MyPosts)

export default MyPostsContainer