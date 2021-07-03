const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: 'How are you?', likesCount: 10},
        { id: 2, message: 'Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?', likesCount: 11},
        { id: 3, message: 'That\'s my first post', likesCount: 33},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let body = state.newPostText;
            if(body === '') return state;
            let newPost = {
                id: state.postsData.length + 1,
                message: body,
                likesCount: 0,
            }
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }); 

export default profileReducer;