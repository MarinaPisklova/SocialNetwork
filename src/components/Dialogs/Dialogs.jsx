import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import { Textarea } from "../common/FormsControl/FormsControl";
import { maxLengthCreator, required } from "../../utilites/validators/validators";

const maxLength10 = maxLengthCreator(10);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);
    let messagesElements = props.dialogsPage.messagesData.map((message) => <Message key={message.id} message={message.message} owner={message.owner} />);
   
    let addNewMessage = (values) => {
        props.addMessage(values.message);
    }
    
    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
                <div className={classes.block}>
                    <div className={classes.messages}>
                        {messagesElements}
                    </div>
                    <div >
                        <TextReduxForm {...props} onSubmit={addNewMessage}/>
                    </div>
                </div>
                <div className={classes.dialogs_item}>
                    {dialogsElements}
                </div>
            </div>
        </div>
    )
}

const TextForm = (props) => {
    return (
        <form className={classes.textForm} onSubmit={props.handleSubmit}>
            <Field  className={classes.form} 
                    component={Textarea}
                    name="message"
                    placeholder="Enter new message"
                    validate={[required, maxLength10]} />
            <button className={classes.btn}>Send</button>
        </form>
    )
}
const TextReduxForm = reduxForm({form:"message"})(TextForm);

export default Dialogs;