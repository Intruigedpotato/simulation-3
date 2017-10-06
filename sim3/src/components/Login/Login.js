import React, {Component} from 'react';
import './Login.css';
import logo from './../../assets/logo.png';


 class Login extends Component {
     constructor() {
         super();
         
         this.state = {
             login: ''
         }
     }
    render() {
        return (
            <div className="parent-login">
              <div className="login-box">
                  <div className="logo">
                    <img className="winky-guy" src={logo}/>
                    <div className="Helo"> Helo </div>
                  </div>
                  <div className="button-container">
                      <div className="button">
               <a className="click-me" href={ process.env.REACT_APP_LOGIN } >    
                    Login / Register   
                </a>
                </div>
                </div>
                </div>
            </div>
        )
    }
}export default Login;