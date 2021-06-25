import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={'/dialogs/' + props.id} className={classes.user} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;