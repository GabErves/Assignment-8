
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credit from './components/Credit';


function App () {
const [accountBalance, setAccountBalance] = useState(14568.27)
const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })
  
  // const onChangeName = (event) => {
  //   setName(event.target.value);
  // };

  // const onChangeAmount = (event) =>{
  //   setAmount(parseInt(event.target.value));
  // };

  




  const mockLogIn = (logInInfo) => {
    const newUser = {...currentUser}
    newUser.userName = logInInfo.userName
    setCurrentUser(newUser)
  }

  


  render(); {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
  );
  const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
  
  //const CreditComponent = () => (<Credit user={this.state.currentUser} ammount={this.props.accountBalance} {...this.props}/>)
  
  
 

    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home accountBalance={accountBalance}/>}/>
        <Route path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}  />}/>
        <Route exact path="/login" element={<LogInComponent/>}/>
        <Route path="/login" element={<LogIn user={currentUser} mockLogIn={mockLogIn}/>}/>
  ...
        </Routes>
        
      </BrowserRouter>
        
    );
  }

}



export default App;