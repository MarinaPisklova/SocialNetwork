import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux"

const mapStateToProps= (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
};

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText,addPost })(MyPosts);

export default MyPostsContainer; 