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
        this.setFirst = this.setFirst.bind(this)
        this.setEyeColor = this.setEyeColor.bind(this)
        this.setGender = this.setGender.bind(this)
        this.setHairColor = this.setHairColor.bind(this)
        this.setHobby = this.setHobby.bind(this)
        this.setLast = this.setLast.bind(this)
    }

    setFirst(val) {
        this.setState({
            first_name: val
        })
    }

    setLast(val) {
        this.setState({
            first_name: val
        })
    }

    setGender(val) {
        this.setState({
            first_name: val
        })
    }

    setHairColor(val) {
        this.setState({
            first_name: val
        })
    }

    setEyeColor(val) {
        this.setState({
            first_name: val
        })
    }

    setHobby(val) {
        this.setState({
            first_name: val
        })
    }

    updateUser() {
        axios.post(`${url}/updateuser`
            , {
                id: this.state.currentUser.id,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                gender: this.state.gender,
                hair_color: this.state.hair_color,
                eye_color: this.state.eye_color,
                hobby: this.state.hobby,
            }
        ).then(res => {
            this.setState({
            })
        }
        )
    }

    componentDidMount() {
        axios.get(`/auth/me`).then(res => {
            console.log(res.data)
            let { first_name, last_name, gender, hair_color, eye_color, hobby, id, auth_id, birthdate } = res.data
            this.setState({
                currentUser: res.data,
                first_name,
                last_name,
                gender,
                hair_color,
                eye_color,
                hobby
            })
        })
        .catch( err => console.log(err))
    }

    render() {
        let { first_name, last_name, gender, hair_color, eye_color, hobby, birthdate } = this.state.currentUser
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
                    <input className='user-info-input' placeholder={first_name} onChange={e => { this.setFirst(e.target.value); console.log(this.state) }} ></input>

                    <h1 className='user-info-name'>Last Name</h1>
                    <input className='user-info-input' placeholder={last_name}  onClick={e => this.setLast(e.target.value)} ></input>

                    <h1 className='user-info-name'>Gender</h1>
                    <input className='user-info-input' placeholder={gender} onClick={e => this.setGender} ></input>

                    <h1 className='user-info-name'>Hair Color</h1>
                    <input className='user-info-input' placeholder={hair_color} onClick={e => this.setHairColor} ></input>

                    <h1 className='user-info-name'>Eye Color</h1>
                    <input className='user-info-input' placeholder={eye_color} onClick={e => this.setEyeColor} ></input>

                    <h1 className='user-info-name'>Hobby</h1>
                    <input className='user-info-input' placeholder={hobby} onChange={e => this.setHobby} ></input>

                    <h1 className='user-info-name'>Birth Day</h1>
                    <input className='user-info-input' placeholder={birthdate} ></input>

                    <h1 className='user-info-name'>Birth Month</h1>
                    <input className='user-info-input'></input>

                    <h1 className='user-info-name'>Birth Year</h1>
                    <input className='user-info-input'></input>
                </div>
            </div>
        )
    }
}
