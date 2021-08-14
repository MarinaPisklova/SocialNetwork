import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateStatus } from './../../redux/profile-reducer';
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 2;
    }
    this.props.getUserProfile(userID);
    this.props.getUserStatus(userID);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus}/>
  }
}

let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  }
)

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);