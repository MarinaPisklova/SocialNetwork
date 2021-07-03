const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
    // users:[
    //     {id: 1, name: "Marina", status:"I'm here", location: {city: "Chelyabinsk", country: "Russia"}, isFollow: true},
    //     {id: 2, name: "Alex", status:"Hello people", location: {city: "Moscow", country: "Russia"}, isFollow: true},
    //     {id: 3, name: "Katya", status:"Bla bla bla", location: {city: "Ekaterinburg", country: "Russia"}, isFollow: false},
    //     {id: 4, name: "Victor", status:"i love all of us", location: {city: "Chelyabinsk", country: "Russia"}, isFollow: false}
    // ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) 
                        return {
                            ...user,
                            isFollow: true,
                        }
                    return user;
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) 
                        return {
                            ...user,
                            isFollow: false,
                        }
                    return user;
                }),
            }
        }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;