import { connect } from "react-redux";
import { addNewLike, addUnlike } from "../../../redux/profile-reducer";
import Post from "./Post";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData
  }
}

const PostContainer = connect(mapStateToProps, { addNewLike, addUnlike })(Post);

export default PostContainer;