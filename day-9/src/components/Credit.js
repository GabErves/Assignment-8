//import React, {Component} from 'react';
import React, {useEffect, useState} from 'react';
import Home from './Home';
import axios from 'axios';




function Credit(){

    const [name, setName] = useState(0);
   const [amount, setAmount] = useState(0);
   
   const [credit, setCredit] = useState([{amount:1000, name: "Coffee Machine"}
  ]);
  const [credits, setCredits] = useState([])

    
      const onChangeName = (event) => {
        event.preventDefault();

        setName(event.target.value);
        console.log(event.target.value)
      };
    
      const onChangeAmount = (event) => {
        event.preventDefault();
        setAmount(parseInt(event.target.value)); 
        console.log(event.target.value) // setting amount that you want to change
      };
      const addCredit = (event) =>{
        event.preventDefault();
        const newCredits = [...credit];
        newCredits.push({amount, name}); // 
        setCredit(newCredits);
      }

      const getData = async () =>{
        await axios.get("https://moj-api.herokuapp.com/debits")
        .then(res=>{
          setCredits(res.credits)
          console.log(res.credits)
        })
      }
    
    
      useEffect(() => {
        getData()
    
    
      }, [credits]) // continous listen for api, no data, would only run once
    



return(
    <div className = "creditapp">
        {credit.map((credit,key) => {
            return(<div key={key}>
                <p>{credit.name}::{credit.amount}</p>
                
                </div>
                
            
        
   
    );
})}

    <input onChange = {onChangeName} type = "text" placeholder = "name"/>
    <input onChange ={onChangeAmount} type = "number" placeholder = "amount"/>
    <button onClick = {addCredit}>Add Credit</button> 

    </div>
    

);
}


export default Credit; 