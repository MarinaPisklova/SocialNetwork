import axios from "axios";
import React from "react";
import classes from "./Users.module.css";

class User extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(Response =>{
            this.props.setUsers(Response.data.items);
            this.props.setTotalUsersCount(Response.data.totalCount);
        });
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(Response =>{
            this.props.setUsers(Response.data.items);
        });
    }

    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let pageInd = 1; pageInd <= pagesCount; pageInd++) {
            pages.push(pageInd);
        }
        
        return (
            <div className={classes.users}>
                <div className={classes.select}>
                    {
                        pages.map(p => {
                            return <span className={this.props.currentPage === p ? classes.selected : undefined} key={p} onClick = {(e) => {this.onPageChanged(p)}}>{p}</span>;
                        })
                    }
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={classes.userItem}>
                            <div className={classes.container}>
                                <img src={u.photos.small != null ? u.photos.small : "/images/friendsIcons/defaultIcon.png" } alt="icon" className={classes.icon} />
                                <div >
                                    {
                                        u.isFollow
                                            ? <button className={classes.btn} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                            : <button className={classes.btn} onClick={() => { this.props.follow(u.id) }}>Follow</button>
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
}


export default User;