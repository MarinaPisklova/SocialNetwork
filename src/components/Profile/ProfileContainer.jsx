import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if(!userID) {
      userID = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile
  }
)

let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile})(withURLDataContainerComponent); 