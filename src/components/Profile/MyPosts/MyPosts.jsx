import classes from "./MyPosts.module.css";
import Post from "../Post/Post"
import React from "react";

const MyPosts = (props) =>{
  let store = props.store;
  let state = store.getState();

  let postsElements = state.profilePage.postsData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} /> );

  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.store.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.store.updateNewPostText(text);
  }

  return (
    <div>
      <div className={classes.postForm}>
        <p className={classes.nameForm}>My posts</p>
        <textarea value={state.profilePage.newPostText} className={classes.form} ref={newPostElement} onChange={onPostChange} />
        <button className={classes.btn} onClick={addPost}>Add post</button>
      </div>
      <div className={classes.postsElements}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;