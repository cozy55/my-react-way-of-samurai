const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs:[
        {id: 1, name: 'Sashko'},
        {id: 2, name: 'Nazarko'}, 
        {id: 3, name: 'Yaroslavko'}
    ],
    messages:[
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'}, 
        {id: 3, message: 'Yo'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            let body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }],
                newMessageBody: ''
            }
        }
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        default:
            return state
    }
}
export const sendMessageCreator = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer