import classes from "./Post.module.css";

const Post = (props) => {
  let newLike = () =>{
    props.addNewLike(props.id);
  }

  let Unlike = () =>{
    props.addUnlike(props.id);
  }

  let classHeart;
  if (props.isMyLike === true) {
    classHeart = classes.heart + ' ' + classes.activeHeart;
  }
  else {
    classHeart = classes.heart;
  }

  return (
    <div className={classes.post}>
      <div className={classes.round}></div>
      <p className={classes.text}>{props.message}</p>

      <div className={classes.likeBox}>
        <svg className={`${classHeart}`} viewBox="0 0 32 29.6">
          {
            props.isMyLike
              ? <path onClick={Unlike} d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
              : <path onClick={newLike} d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
          } 
        </svg>
        <span className={classes.likes}>{props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;