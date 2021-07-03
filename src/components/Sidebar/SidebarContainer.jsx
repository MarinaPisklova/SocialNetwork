import Sidebar from './Sidebar'
import {connect} from "react-redux"

let mapStateToProps = (state) =>{
    return {
        sidebarPage: state.sidebarPage,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {};
}

let SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;