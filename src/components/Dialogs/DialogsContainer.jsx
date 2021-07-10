import { addMessage, updateNewMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagesPage,
    }
}

let DialogsContainer = connect(mapStateToProps, { addMessage, updateNewMessageText })(Dialogs);

export default DialogsContainer;