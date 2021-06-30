import classes from "./MyPosts.module.css";
import Post from "../Post/Post"
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) =>{
  let postsElements = props.state.profilePage.postsData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} /> );

  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.dispatch(addPostActionCreator()); 
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div>
      <div className={classes.postForm}>
        <p className={classes.nameForm}>My posts</p>
        <textarea value={props.state.profilePage.newPostText} className={classes.form} ref={newPostElement} onChange={onPostChange} />
        <button className={classes.btn} onClick={addPost}>Add post</button>
      </div>
      <div className={classes.postsElements}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;