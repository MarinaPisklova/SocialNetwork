import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users-reducer";
import User from "./Users";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID) => {dispatch(followAC(userID))},
        unfollow: (userID) => {dispatch(unfollowAC(userID))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (page) => {dispatch(setCurrentPageAC(page))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
      }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UsersContainer;