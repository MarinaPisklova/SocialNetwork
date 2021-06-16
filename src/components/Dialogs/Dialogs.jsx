import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                <div className={classes.item}>
                    <NavLink to='/dialogs/1' className={classes.user} activeClassName={classes.active}>Marina</NavLink>
                </div>
                <div className={classes.item}>
                     <NavLink to='/dialogs/2' className={classes.user} activeClassName={classes.active}>Victor</NavLink>
                </div>
                <div className={classes.item}>
                     <NavLink to='/dialogs/3' className={classes.user} activeClassName={classes.active}>Valera</NavLink>
                </div>
                <div className={classes.item}>
                     <NavLink to='/dialogs/4' className={classes.user} activeClassName={classes.active}>Katya</NavLink>
                </div>
                <div className={classes.item}>
                     <NavLink to='/dialogs/5' className={classes.user} activeClassName={classes.active}>Vasay</NavLink>
                </div>
                <div className={classes.item}>
                     <NavLink to='/dialogs/6' className={classes.user} activeClassName={classes.active}>Alex</NavLink>
                </div>
                <div className={classes.item}>
                     <NavLink to='/dialogs/7' className={classes.user} activeClassName={classes.active}>Sasha</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    <div className={classes.text}>Hi</div></div>
                <div className={classes.message}>
                    <div className={classes.text}>How is your</div>
                </div>
                <div className={classes.message}>
                    <div className={classes.text}>Hiszdxfcgthyuj</div>
                </div>
                <div className={classes.message}>
                    <div className={classes.text}>Hiasdfxgtchujb[p;</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;