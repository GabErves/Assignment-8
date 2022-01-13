// src/components/AccountBalance.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Fragment, useState } from 'react';

function Credits(){
    const [name, setName] = useState(0);
   const [amount, setAmount] = useState(0);
   const [debit, setDebit] = useState(["100"])
   const [credit, setCredit] = useState([{amount:1000, name: "Coffee Machine"}
  ]);
    const addCredit = () =>{
        const newDebits = [...credit];
        newCredits.push({amount, name});
        setDebit(newCredits);
      }

      //return();
}



class Credit extends Component{
    render() {
        
        return (
            <div>
              <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
              <h1 className = "text-center mt-5">Bank of React</h1>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/userProfile">User Profile</Link></button>


              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/AccountBalance">Account Balance</Link></button>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/home">Home</Link></button>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/login">Login</Link></button>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/credit">Credit</Link></button>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/debit">Debit</Link></button>


              <AccountBalance accountBalance={this.props.accountBalance}/>


            </div>
        );
      }



}

export default Credit;