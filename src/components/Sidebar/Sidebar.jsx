import Navbar from './Navbar/Navbar';
import BlockFriends from './BlockFriends/BlockFriends';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={classes.nav}>
            <Navbar />
            <BlockFriends friendsData={props.state.friends} />
        </div>
    )
}

export default Sidebar;