import React, {Component} from 'react';
import logo from '../assets/helo_logo.png';

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
                    <button>Log In</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}

export default Landing;