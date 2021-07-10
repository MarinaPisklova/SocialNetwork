const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const NEW_LIKE= 'NEW_LIKE';
const UNLIKE= 'UNLIKE';
const SET_USER_PROFILE= 'SET_USER_PROFILE';

let initialState = {
    profile: null,
    postsData: [
        { id: 1, message: 'How are you?', likesCount: 10, isMyLike: false},
        { id: 2, message: 'Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?', likesCount: 11, isMyLike: false, num: false},
        { id: 3, message: 'That\'s my first post', likesCount: 33, isMyLike: true, num: false},
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
                isMyLike: false,
                num: false,
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
        case NEW_LIKE: {
            return {
                ...state,
                postsData: state.postsData.map(post => {
                    if(action.idPost === post.id){
                        let newCount = post.likesCount + 1;
                        return {
                            ...post,
                            likesCount: newCount,
                            isMyLike: true,
                        }
                    }
                    return post;
                })
            }
        }
        case UNLIKE: {
            return {
                ...state,
                postsData: state.postsData.map(post => {
                    if(action.idPost === post.id){
                        let newCount = post.likesCount - 1;
                        return {
                            ...post,
                            likesCount: newCount,
                            isMyLike: false,
                        }
                    }
                    return post;
                })
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const addNewLike = (id) => ({type: NEW_LIKE, idPost: id});
export const addUnlike = (id) => ({type:UNLIKE, idPost: id});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text}); 
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile}); 

export default profileReducer;