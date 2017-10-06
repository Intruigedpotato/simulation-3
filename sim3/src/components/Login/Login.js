import React, {Component} from 'react';
import './Login.css';


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