import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

    // trying to connect the links to each profile all around
    class Home extends Component {
      render() {
        return (
            <div>
              <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
              <h1 className = "text-center mt-5">Bank of React</h1>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/userProfile">User Profile</Link></button>


              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/accountBalance">Account Balance</Link></button>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/home">Home</Link></button>


              <AccountBalance accountBalance={this.props.accountBalance}/>


            </div>
        );
      }
    }
    
    export default Home;