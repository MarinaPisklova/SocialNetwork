import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                // { id: 1, message: 'How are you?', likesCount: 10},
                // { id: 2, message: 'Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?', likesCount: 11},
                // { id: 3, message: 'That\'s my first post', likesCount: 33},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this.getState());
    }
}

export default store;