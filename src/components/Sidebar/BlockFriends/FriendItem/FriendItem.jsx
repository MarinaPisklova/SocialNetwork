import classes from "./FriendItem.module.css";
import { NavLink } from "react-router-dom";

const FriendsItem = (props) => {
  let iconPath = "/images/friendsIcons/" + props.icon;
  let id = "/" + props.id;

  return (
    <div >
      <NavLink className={classes.item} to={id}>
        <img src={iconPath} alt="" className={classes.icon} />
        <p className={classes.name}>{props.name}</p>
      </NavLink>
    </div>
  )
}

export default FriendsItem;