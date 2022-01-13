import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credit from './components/Credit';


function App () {
  
  
  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAmount = (event) =>{
    setAmount(parseInt(event.target.value));
  };

  




  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
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
        <Route exact path="/home" element={<HomeComponent/>}/>
        <Route exact path="/userProfile" element={<UserProfileComponent/>}/>
        <Route exact path="/login" element={<LogInComponent/>}/>
        <Route exact path="/accountBalance" element={<LogInComponent/>}/>
        <Route exact path="/accountBalance" element={<LogInComponent/>}/>
        </Routes>
        
      </BrowserRouter>
        
    );
  }

}



export default App;