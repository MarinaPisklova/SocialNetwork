import { addMessage, updateNewMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagesPage,
    }
}

export default compose(
    connect(mapStateToProps, { addMessage, updateNewMessageText }),
    withAuthRedirect
    )(Dialogs);