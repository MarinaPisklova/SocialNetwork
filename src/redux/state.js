const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'How are you?', likesCount: 10},
                { id: 2, message: 'Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?', likesCount: 11},
                { id: 3, message: 'That\'s my first post', likesCount: 33},
            ],
            newPostText: "",
        },

        messagesPage:{
            dialogsData: [
                { id: 1, name: 'Marina' },
                { id: 2, name: 'Victor' },
                { id: 3, name: 'Valera' },
                { id: 4, name: 'Katya' },
                { id: 5, name: 'Vasay' },
                { id: 6, name: 'Alex' },
                { id: 7, name: 'Sasha' },
            ],
            messagesData: [
                { id: 1, message: 'Hi', owner: true },
                { id: 2, message: 'How is your', owner: false  },
                { id: 3, message: 'Hiszdxfcgthyuj', owner: true  },
                { id: 4, message: 'Hiasdhjgs f gdh h h;', owner: false  },
                { id: 5, message: 'azsxdfghyujikl', owner: true  },
            ],
            newMessageText: "",
        },

        sidebarPage: {
            friends: [
                { id: 1, name: 'Marina', icon: 'marina.jpg' },
                { id: 2, name: 'Victor', icon: 'victor.jpg' },
                { id: 3, name: 'Valera', icon: 'valera.jpg' },
                { id: 4, name: 'Katya', icon: 'katya.jpg' },
                { id: 5, name: 'Vasay', icon: 'vasay.png' },
                { id: 6, name: 'Alex', icon: 'alex.jpg' },
                { id: 7, name: 'Sasha', icon: 'sasha.png' },
            ]
        }
    },

    _callSubscriber(){
        console.log("no subscibers");
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    getState(){
        return this._state;
    },
   
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: this._state.profilePage.postsData.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.getState());
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        }
        else if(action.type === ADD_MESSAGE){
            let newMessage = {
                id: this._state.messagesPage.messagesData.length + 1,
                message: this._state.messagesPage.newMessageText,
                owner: true,
            }
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText =  '';
            this._callSubscriber(this.getState());
        }
        else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.messagesPage.newMessageText = action.messageText;
            this._callSubscriber(this.getState());
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }); 

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (newMessage) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: newMessage
}); 

export default store;