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
                <button>Login / Register</button>
            </div>
        )
    }
}export default Login;