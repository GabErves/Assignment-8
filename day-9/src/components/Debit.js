//import React, {Component} from 'react';
import React, {useState} from 'react';
import Home from './Home';
 
function Debit(){

    const [name, setName] = useState(0);
   const [amount, setAmount] = useState(0);
   const [debit, setDebit] = useState(["100"])
   const [credit, setCredit] = useState([{amount:1000, name: "Coffee Machine"}
  ]);

    const addDebit = () =>{
        const newDebits = [...debit];
        newDebits.push({amount, name});
        setDebit(newDebits);
      }
      const onChangeName = (event) => {
        setName(event.target.value);
      };
    
      const onChangeAmount = (event) => {
        setAmount(parseInt(event.target.value));
      };
    



return(
    <div className = "debitapp">
        {debit.map((debit,key) => {
            return(<div key={key}>
                {debit.name}::{debit.amount}
                </div>
                
            
        
   
    );
})}

    <input onChange = {onChangeName} type = "text" placeholder = "name"/>
    <input onChange ={onChangeAmount} type = "number" placeholder = "amount"/>
    <button onClick = {addDebit}>Add Debit</button> 

    </div>
    

);
}


export default Debit; 