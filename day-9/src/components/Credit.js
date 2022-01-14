//import React, {Component} from 'react';
import React, {useState} from 'react';
import Home from './Home';
 
function Debit(){

    const [name, setName] = useState(0);
   const [amount, setAmount] = useState(0);
   const [debit, setDebit] = useState(["100"])
   const [credit, setCredit] = useState([{amount:1000, name: "Coffee Machine"}
  ]);

    const addCredit = () =>{
        const newCredits = [...credit];
        newCredits.push({amount, name});
        setCredit(newCredits);
      }
      const onChangeName = (event) => {
        setName(event.target.value);
      };
    
      const onChangeAmount = (event) => {
        setAmount(parseInt(event.target.value));
      };
    



return(
    <div className = "creditapp">
        {credit.map((credit,key) => {
            return(<div key={key}>
                {credit.name}::{credit.amount}
                </div>
                
            
        
   
    );
})}

    <input onChangeName = {onChangeName} type = "text" placeholder = "name"/>
    <input onChangeAmount ={onChangeAmount} type = "number" placeholder = "amount"/>
    <button onClick = {addCredit}>Add Credit</button> 

    </div>
    

);
}


export default Debit; 