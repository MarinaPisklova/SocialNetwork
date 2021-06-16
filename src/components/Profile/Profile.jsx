import Post from "./Post/Post";
import Postform from "./Postform/Postform";
import classes from "./Profile.module.css";
import avatar from '../../images/avatar.jpg';


const Profile = () =>{
  return (
    <div>
      <div className={classes.covering}>
        <img className={classes.banner} alt='2'
          src='https://img.freepik.com/free-photo/aerial-drone-panorama-view-of-chisinau-moldova-at-sunset_1268-17441.jpg?size=626&ext=jpg'></img>
      </div>
      <div className={classes.profile}>
        <img className={classes.avatar} alt='3' src={avatar}></img>
        <div className={classes.info}>
          <p className={classes.name}>Marina Pisklova</p>
          <ul className={classes.list}>
            <li className={classes.item}>Age: 27</li>
            <li className={classes.item}>City: Chelyabinsk</li>
            <li className={classes.item}>Education: CSU'17</li>
            <li className={classes.item}>Interest: movies, food, music</li>
          </ul>
        </div>
      </div>
      <Postform/>
      <Post message="How are you?"/>
      <Post message="Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?Have you seen last new movies?"/>   
      <Post message="That's my first post"/>
    </div>
  )
}

export default Profile;