import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RegisterComponent from './Register';
import LoginComponent from './login';
import UserApi from './userApi';
import Profile from './Profile';

const Routing =() =>{
  return(
    <div>
    <BrowserRouter><Header/>
    <Route exact path="/" component={RegisterComponent}/>
    <Route exact path="/login" component={LoginComponent}/>
    <Route exact path="/list" component={UserApi}/>
    <Route exact path="/Profile" component={Profile}/>
    <Footer/>
    </BrowserRouter></div>


  )
}
export default Routing;
