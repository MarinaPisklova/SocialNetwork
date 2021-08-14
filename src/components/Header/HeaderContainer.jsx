import Header from './Header';
import React from 'react';
import { getAuthUserData } from './../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    };
}

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);