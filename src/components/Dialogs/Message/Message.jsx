import classes from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.text}>{props.message}</div>
        </div>
    )
}

export default Message;