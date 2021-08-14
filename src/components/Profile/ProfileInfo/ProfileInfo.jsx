import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return (
      <Preloader />
    )
  }
  return (
    <div>
      <div className={classes.covering}>
        <img className={classes.banner} alt='2'
          src='https://img.freepik.com/free-photo/aerial-drone-panorama-view-of-chisinau-moldova-at-sunset_1268-17441.jpg?size=626&ext=jpg'></img>
      </div>
      <div className={classes.wrapper} >
        <div className={classes.profile}>
          <img className={classes.avatar} alt='3' src={props.profile.photos.large != null ? props.profile.photos.large : "/images/friendsIcons/defaultIcon.png"}></img>
          <div className={classes.info}>
            <p className={classes.name}>{props.profile.fullName}</p>
            <ul className={classes.list}>
              <li className={classes.item}>Обо мне: {props.profile.aboutMe}</li>
              <li className={classes.item}>В поиске работы: {props.profile.lookingForAJob ? 'да' : 'нет'}</li>
              <li className={classes.item}>Какую работу ищу: {props.profile.lookingForAJobDescription}</li>
              <ProfileStatus {...props} />
            </ul>
          </div>
        </div>
        <div className={classes.contacts}>
          <p>Контакты:</p>
          <ul className={classes.list}>
            {props.profile.contacts.facebook ? <li className={classes.item}>facebook: <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></li> : null}
            {props.profile.contacts.website ? <li className={classes.item}>website: <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></li> : null}
            {props.profile.contacts.github ? <li className={classes.item}>github: <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></li> : null}
            {props.profile.contacts.mainLink ? <li className={classes.item}>mainLink: <a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a></li> : null}
            {props.profile.contacts.vk ?  <li className={classes.item}>vk: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></li> : null}
            {props.profile.contacts.twitter ? <li className={classes.item}>twitter: <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></li> : null}
            {props.profile.contacts.instagram ? <li className={classes.item}>instagram: <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></li> : null}
            {props.profile.contacts.youtube ? <li className={classes.item}>youtube: <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></li> : null}
          </ul>
        </div>
      </div>

      {/* <div className={classes.profile}>
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
      </div> */}
    </div>
  )
}

export default ProfileInfo;