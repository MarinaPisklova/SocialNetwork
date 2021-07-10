import classes from "./Preloader.module.css";
import preloader from "../../../images/circles.svg"

const Preloader = () => {
    return (
        <img className={classes.fetchIcon} src={preloader} />
    )
}

export default Preloader;