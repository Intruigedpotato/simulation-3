import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import url from '../../url/url';
import axios from 'axios';
//import Nav from '../Nav/Nav'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: {},
            users: [{}, {}]
        }
    }
    componentDidMount() {
        // axios.get(`${url}/api/currentuser`).then(res => {
        //     this.setState({
        //         currentUser: res.data //expecting to get current user off of session
        //     })
        // })
        axios.get(`${url}/api/users`).then(res => {
            console.log('it worked')
            this.setState({
                users: res.data //expecting to get all users in an array from db
            })
        })
    }
    render() {
        let { first_name, last_name, img } = this.state.currentUser
        return (
            <div className='Dashboard' >
                {/* <Nav header='Dashboard' /> */}
                <div className='current-user-tile'>
                    <img className='img current-user-img' src='' />
                    <h1 className='current-user-name'>{first_name}{last_name}</h1>
                    <Link to='/profile' className='button edit-profile' >Edit Profile</Link>
                </div>
                <div className='welcome-box'>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</div>
                <div className='friends-list'>
                    <div className='friends-list-header'>
                        <h1 className='' >Recommended Friends</h1>
                    </div>
                    {
                        this.state.users.map((user, i, arr) => {
                            return (
                                <div className='user-tile' key={i} >
                                    <img src={user.img} />
                                    <h1 className='user-name'>{user.first_name}{user.last_name}</h1>
                                    <button className='button add-friend'>Add Friend</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}    
