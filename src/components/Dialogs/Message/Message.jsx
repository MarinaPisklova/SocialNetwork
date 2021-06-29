import classes from "./Message.module.css";

const Message = (props) => {
    let classMessage;
    if(props.owner === true){
        classMessage = classes.ownerI;
    }
    else{
        classMessage = classes.ownerYou;
    }

    return (
        <div className={classes.message + ' ' + `${classMessage}`}>
            <div className={classes.text}>{props.message}</div>
        </div>
    )
}

export default Message;