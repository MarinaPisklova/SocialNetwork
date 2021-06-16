import classes from "./Postform.module.css";

const Postform = () =>{
  return (
    <div className={classes.postForm}>
      <p className={classes.nameForm}>My posts</p>
      <input type={Text} placeholder='your news' className={classes.form}></input>
      <button className={classes.btn}>Send</button>
    </div>
  )
}

export default Postform;