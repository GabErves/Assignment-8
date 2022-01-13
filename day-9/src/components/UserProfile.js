// src/components/UserProfile.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <div>Account Balance: {this.props.accountBalance}</div>
          
        </div>
    );
  }
}

export default UserProfile;