import React, {Component} from 'react';
import logo from '../assets/helo_logo.png';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = () => {
        const {username, password} = this.state;
        axios.post('/api/auth/register', {username, password}).then(res => {
            this.props.getUser(res.data)
        })
    }

    handleLogin = () => {
        const {username, password} = this.state;
        axios.post('/api/auth/login', {username, password}).then(res => {
            this.props.getUser(res.data)
        })
    }

    render(){
        return(
            <div className='landing'>
                <img 
                    className='App-logo'
                    src={logo}
                />
                <div className='input-container'>
                    <label htmlFor='username'>Username:</label>

                    <input 
                        value={this.state.username}
                        maxLength='20'
                        placeholder='Enter Username'
                        id='username'
                        name='username'
                        onChange={(e) => this.handleInput(e)}
                        type='email'
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor='password'>Password:</label>
                    <input 
                        value={this.state.password}
                        maxLength='20'
                        placeholder='Enter Password'
                        id='password'
                        name='password'
                        onChange={(e) => this.handleInput(e)}
                        type='password'
                    />
                </div>
                <div className='buttons'>
                    <button onClick={this.handleLogin}>Log In</button>
                    <button onClick={this.handleRegister}>Register</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {getUser})(Landing);