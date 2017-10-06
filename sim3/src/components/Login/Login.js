import React, {Component} from 'react';


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
               <a href={ process.env.REACT_APP_LOGIN } >    
                <button>Login / Register</button>
               </a>
            </div>
        )
    }
}export default Login;