import classes from "./MyPosts.module.css";
import Post from "../Post/Post"

const MyPosts = (props) =>{
  //debugger;
  let postsElements = props.postsData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} /> );

  return (
    <div>
      <div className={classes.postForm}>
        <p className={classes.nameForm}>My posts</p>
        <input type="text" placeholder='your news' className={classes.form}></input>
        <button className={classes.btn}>Send</button>
      </div>
        {postsElements}
    </div>
  )
}

export default MyPosts;