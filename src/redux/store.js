import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state:{
        profilePage:{
            posts:[
                    {id: 1, message: 'Hi, how are you?', likesCount: 12},
                    {id: 2, message: "It's my first post", likesCount: 11},
                    {id: 3, message: 'Blala', likesCount: 2},
                    {id: 4, message: 'Dada', likesCount: 34}
                ],
            newPostText: 'Slava Ukrayini'
        },
        dialogsPage:{
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
        },
        sidebar:{}
    },

    _callSubscriber(_state){
        console.log('State changed')
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)
        this._callSubscriber(this._state)
    }
}
    
export default store
window.store = store