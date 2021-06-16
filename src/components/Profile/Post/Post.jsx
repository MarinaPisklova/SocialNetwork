import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.round}></div>
      <p className={classes.text}>{props.message}</p>
      <span className={classes.likes}>Likes</span>
    </div>
  )
}

export default Post;