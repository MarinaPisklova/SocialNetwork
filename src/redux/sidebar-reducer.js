
let initialState = {
    friends: [
        { id: 1, name: 'Marina', icon: 'marina.jpg' },
        { id: 2, name: 'Victor', icon: 'victor.jpg' },
        { id: 3, name: 'Valera', icon: 'valera.jpg' },
        { id: 4, name: 'Katya', icon: 'katya.jpg' },
        { id: 5, name: 'Vasay', icon: 'vasay.png' },
        { id: 6, name: 'Alex', icon: 'alex.jpg' },
        { id: 7, name: 'Sasha', icon: 'sasha.png' },
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;