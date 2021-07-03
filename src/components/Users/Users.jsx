import axios from "axios";
import classes from "./Users.module.css";

const Users = (props) => {
    let getUsers = () => {
        if(props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response =>{
                props.setUsers(Response.data.items);
            });
        }
    }
   
  
    return (
        <div className={classes.users}>
            <button onClick={getUsers}>get users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={classes.userItem}>
                        <div className={classes.container}>
                            <img src={u.photos.small != null ? u.photos.small : "/images/friendsIcons/defaultIcon.png" } alt="icon" className={classes.icon} />
                            <div >
                                {
                                    u.isFollow
                                        ? <button className={classes.btn} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                        : <button className={classes.btn} onClick={() => { props.follow(u.id) }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={classes.container_left}>
                            <div className={classes.main_info}>
                                <p className={classes.name}>{u.name}</p>
                                <p className={classes.status}>{u.status}</p>
                            </div>
                            <div className={classes.location_info}>
                                <p className={classes.location}>{"u.location.city"}</p>
                                <p className={classes.location}>{"u.location.country"}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <div className={classes.block_btn}>
                <button className={classes.btn_show}>Show more</button>
            </div>
        </div>
    )
}


export default Users;