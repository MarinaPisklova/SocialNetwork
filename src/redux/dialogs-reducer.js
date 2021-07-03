const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            let body = state.newMessageText;
            if(body === '') return state;
            let newMessage = {
                id: state.messagesData.length + 1,
                message: body,
                owner: true,
            }
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText: action.messageText,
            };
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (newMessage) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: newMessage
}); 

export default dialogsReducer;