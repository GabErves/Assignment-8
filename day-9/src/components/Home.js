import React from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
          <img src="https://res.cloudinary.com/andreahabib/image/upload/v1642026304/React_Bank_dk7n1a.png" alt="bank"/>
          <h1>Bank of React</h1>

          <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/userProfile">User Profile</Link></button>
          <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="./AccountBalance">Account Balance</Link></button>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/home">Home</Link></button>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/login">Login</Link></button>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/Credit">Credit</Link></button>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/Debit">Debit</Link></button>

          <AccountBalance accountBalance={props.accountBalance}/>
        </div>
    );
  }

export default Home;