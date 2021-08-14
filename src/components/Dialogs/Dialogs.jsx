import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}  />);
    let messagesElements = props.dialogsPage.messagesData.map((message) => <Message key={message.id} message={message.message} owner={message.owner}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }
    
    let onMessageChange = () => {
        let newMessage = newMessageElement.current.value;
        props.updateNewMessageText(newMessage);
    }

    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
                <div className={classes.block}>
                    <div className={classes.messages}>
                        {messagesElements}
                    </div>
                    <div className={classes.textForm}>
                        <textarea value={props.dialogsPage.newMessageText} ref={newMessageElement} className={classes.form} onChange={onMessageChange} />
                        <button className={classes.btn} onClick={addMessage}>Send</button>
                    </div>
                </div>
                <div className={classes.dialogs_item}>
                    {dialogsElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;  