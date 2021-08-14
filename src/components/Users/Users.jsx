import React from "react";
import classes from "./Users.module.css";
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let pageInd = 1; pageInd <= pagesCount; pageInd++) {
        pages.push(pageInd);
    }
    console.log(props.currentPage);
    return (
        <div className={classes.users}>
            <div className={classes.select}>
                {
                    
                    pages.map(p => {
                        return <span className={props.currentPage === p ? classes.selected : undefined} key={p} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>;
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={classes.userItem}>
                        <div className={classes.container}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : "/images/friendsIcons/defaultIcon.png"} alt="icon" className={classes.icon} />
                            </NavLink>
                            <div >
                                {
                                    u.followed
                                        ? <button className={classes.btn} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id);}}>Unfollow</button>
                                        : <button className={classes.btn} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>
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