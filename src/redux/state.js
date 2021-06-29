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

    _rerenderEntireTree(){
        console.log("no subscibers");
    },

    getState(){
        return this._state;
    },

    addPost() {
        let newPost = {
            id: this._state.profilePage.postsData.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this);
    },

    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this);
    },
    
    addNewMessage(){
        let newMessage = {
            id: this._state.messagesPage.messagesData.length + 1,
            message: this._state.messagesPage.newMessageText,
            owner: true,
        }
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText =  '';
        this._rerenderEntireTree(this);
    },
    
    updateNewMessageText(messageText){
        this._state.messagesPage.newMessageText = messageText;
        this._rerenderEntireTree(this);
    },

    subscribe(observer){
        this._rerenderEntireTree = observer;
    },
}

export default store;