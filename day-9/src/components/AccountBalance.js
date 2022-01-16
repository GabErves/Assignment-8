import React from 'react';
import UserProfile from './UserProfile';

function AccountBalance(props) {
    return (
        <div>
          Balance: {props.accountBalance}
        </div>
    );
  }

export default AccountBalance;