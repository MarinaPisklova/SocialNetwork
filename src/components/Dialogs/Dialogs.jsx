import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messagesData.map((message) => <Message key={message.id} message={message.message} />);
debugger;
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;