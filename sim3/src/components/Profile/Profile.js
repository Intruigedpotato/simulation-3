import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import url from '../../url/url';
import axios from 'axios';
//import Nav from '../Nav/Nav';

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: {},
            update: false,
            first_name: '',
            last_name: '',
            gender: '',
            hair_color: '',
            eye_color: '',
            hobby: '',
            birth_day: '',
            birth_month: '',
            birth_year: ''
        }
    }
    componentDidMount() {
        axios.get(`/auth/me`).then(res => {
            console.log(res.data)
            this.setState({
                currentUser: res.data
            })
        })
        .catch( err => console.log(err))
    }
    render() {
        return (
            <div className='Profile'>
                {/* <Nav header='User Profile' /> */}
                <div className='profile-user-tile'>
                    <img src='' />
                    <h1 className='profile-user-name'></h1>
                    <button className='button update'>Update</button>
                    <button className='button cancel'>Cancel</button>
                </div>
                <div className='user-info'>
                    <h1 className='user-info-name'>First Name</h1>
                    <input className='user-info-input'></input>

                    <h1 className='user-info-name'>Last Name</h1>
                    <input className='user-info-input'></input>

                    <h1 className='user-info-name'>Gender</h1>
                    <input className='user-info-input'></input>

                    <h1 className='user-info-name'>Hair Color</h1>
                    <input className='user-info-input'></input>

                    <h1 className='user-info-name'>Eye Color</h1>
                    <input className='user-info-input'></input>

                    <h1 className='user-info-name'>Hobby</h1>
                    <input className='user-info-input'></input>

                    <h1 className='user-info-name'>Birth Day</h1>
                    <input className='user-info-input'></input>

                    <h1 className='user-info-name'>Birth Month</h1>
                    <input className='user-info-input'></input>

                    <h1 className='user-info-name'>Birth Year</h1>
                    <input className='user-info-input'></input>
                </div>
            </div>
        )
    }
}
