import classes from "./BlockFriends.module.css";
import FriendsItem from "./FriendItem/FriendItem";

const BlockFriends = (props) => {
  let friendsList = props.friendsData.map(friend => <FriendsItem key={friend.id} id={friend.id} icon={friend.icon} name={friend.name} />);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Friends</h2>
      <div className={classes.blockFriends}>
        {friendsList}
      </div>
    </div>
  )
}

export default BlockFriends;