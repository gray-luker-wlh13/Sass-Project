import React, {Component} from 'react';
import logo from '../assets/helo_logo.png';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer';
import {withRouter} from 'react-router-dom';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            clicked: false
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleToggle = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    handleRegister = () => {
        const {username, password} = this.state;
        axios.post('/api/auth/register', {username, password}).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/home')
        })
    }

    handleLogin = () => {
        const {username, password} = this.state;
        axios.post('/api/auth/login', {username, password}).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/home')
        })
    }

    render(){
        return(
            <div className='landing'>
                {!this.state.clicked ? (
                    <img 
                    id='logo'
                    src={logo}
                    alt='logo'
                />
                ) : (
                    <img 
                        id='clicked-logo'
                        src={logo}
                        alt='logo'
                    />
                )}
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
                    <button onClick={() => {
                        this.handleLogin()
                        this.handleToggle()}}>Log In</button>
                    <button onClick={this.handleRegister}>Register</button>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, {getUser})(Landing));