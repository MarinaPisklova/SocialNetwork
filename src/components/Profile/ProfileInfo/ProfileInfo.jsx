import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.covering}>
        <img className={classes.banner} alt='2'
          src='https://img.freepik.com/free-photo/aerial-drone-panorama-view-of-chisinau-moldova-at-sunset_1268-17441.jpg?size=626&ext=jpg'></img>
      </div>
      <div className={classes.profile}>
        <img className={classes.avatar} alt='3' src="/images/avatar.jpg"></img>
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
    </div>
  )
}

export default ProfileInfo;