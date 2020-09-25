import React from 'react'
import s from './Dialogs.module.css'
import DioalogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { createRef } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) =>{
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DioalogItem name = {d.name} key = {d.id} id = {d.id} /> );
    let messagesElements = state.messages.map(m => <Message message = {m.message} key = {m.id} />);
    let newMessageBody =  state.newMessageBody;

    let newMessage = React.createRef()

    let onSendMessageChangeClick = () =>{
        props.sendMessage()
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if(!props.isAuth) return <Redirect to = '/login' />
    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsIitems}>
                {dialogsElements}
            </div>

            <div className = {s.messages}>
                <div>{messagesElements}</div>
                <div> 
                <textarea  value = {newMessageBody} placeholder = 'Enter your message' onChange = {onNewMessageChange} ref = {newMessage}></textarea>
                </div>
                <div><button onClick = {onSendMessageChangeClick}>Send</button></div>
            </div>
            
        </div>
    )
}

export default Dialogs;