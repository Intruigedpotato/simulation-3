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
                  </div>
                  <div className="button-container"></div>
               <a  href={ process.env.REACT_APP_LOGIN } >    
                {/* <button className="click-me"> */}
                    Login / Register
                    {/* </button> */}
                </a>
                </div>
            </div>
        )
    }
}export default Login;