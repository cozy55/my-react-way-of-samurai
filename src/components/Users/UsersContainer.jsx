import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers} from "../../redux/users-reducer";
import React from 'react'
import Users from './Users'
import Preloader from "../../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render(){
        return <>
            {this.props.isFetching? <Preloader />: null}
            <Users 
                totalUsersCount = {this.props.totalUsersCount }
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged = {this.onPageChanged}
                users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                followingInProgres = {this.props.followingInProgres}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgres: state.usersPage.followingInProgres
    }
}

export default  compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            toogleFollowingProgress,
            getUsers
        })
)(UsersContainer) 


