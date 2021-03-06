import React from 'react'
import s from './Dialogs.module.css'
import DioalogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { createRef } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';

const mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () =>{
            dispatch(sendMessageCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);