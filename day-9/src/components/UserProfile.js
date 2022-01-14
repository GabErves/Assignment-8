// src/components/UserProfile.js


import React from 'react';
import AccountBalance from './AccountBalance';

function UserProfile(props) {
    return (
        <div>
          <h1 className ="text-center mt-5">User Profile</h1>

          <div>Username: {props.userName}</div>
          <div>Member Since: {props.memberSince}</div>
          <AccountBalance accountBalance={props.accountBalance}/>
        </div>
    );
  }

export default UserProfile;