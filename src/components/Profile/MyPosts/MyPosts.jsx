import classes from "./MyPosts.module.css";
import React from "react";
import PostContainer from "../Post/PostContainer";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from "../../../utilites/validators/validators";
import { Textarea } from "../../common/FormsControl/FormsControl";

const maxLength50 = maxLengthCreator(50);

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <PostContainer key={post.id} message={post.message} likesCount={post.likesCount} id={post.id} isMyLike={post.isMyLike} />);

  let addPost = (values) => {
    props.addPost(values.post);
  }

  return (
    <div>
      <div className={classes.postForm}>
        <p className={classes.nameForm}>My posts</p>
        <PostReduxForm {...props} onSubmit={addPost} />
      </div>
      <div className={classes.postsElements}>
        {postsElements}
      </div>
    </div>
  )
}

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field className={classes.form}
          name="post"
          component={Textarea}
          placeholder="Post message"
          validate={[required, maxLength50]} />
      <button className={classes.btn}>Add post</button>
    </form>
  )
}

const PostReduxForm = reduxForm({form: "post"})(PostForm);


export default MyPosts;