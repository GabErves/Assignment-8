// src/components/AccountBalance.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Fragment, useState } from 'react';
const credit = () =>{
    const [credit, setCredit] = useState("add a new credit");
    const onSubmitCredits = async (event) => {
        event.preventDefault() // prevents page from refreshing
        try{    
            const body = {credit}
            
            const response = await fetch ("http://localhost:3000/accountBalance", { //i will go back in later once i figure out the account balance path
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
              })
              console.log(response)
            }
        catch(err){ 
            console.error(err.message)
        }
    
        

    }


}
class Credit extends Component{
    render() {
        
        return (
            <div>
              <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
              <h1 className = "text-center mt-5">Bank of React</h1>

              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/userProfile">User Profile</Link></button>


              <button className = "btn btn-outline-dark btn-lg ml-3"><Link to="/accountBalance">Account Balance</Link></button>

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