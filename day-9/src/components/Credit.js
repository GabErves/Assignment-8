// src/components/AccountBalance.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
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
    

}