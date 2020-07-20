import React, { Component } from 'react'
import { login } from '../../../services/authService';
import { Link } from 'react-router-dom'
import '../../../css/loginRegisterPage.css'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            emailEmpty: false
        }
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state

        if (this.state.email && this.state.password) {
            login(email, password)
                .then(() => {
                    this.props.history.push('/feed')
                })
                .catch(error => this.setState({ error }))
        }
    }

    render() {
        return (
            <form className='logreg' onSubmit={this.onSubmit}>
                <div className='container'>
                    <div className='row logreg'>
                        <div className='col-md-6'>
                            <h2>BitBook Login</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum porttitor justo,
                                 sollicitudin interdum risus porta sit amet. Nulla egestas neque ullamcorper volutpat dictum.
                                  Pellentesque est turpis, lacinia in odio non, tincidunt accumsan diam. Donec purus velit,
                                   faucibus sed lectus ut, mollis vulputate enim. Donec eu bibendum sem, id suscipit eros.
                                    Vivamus vel iaculis sapien, id convallis justo. Nulla in diam erat. Donec quis mauris bibendum,
                                     pulvinar ligula eget, sodales neque.</p>
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='email'>Email</label>
                            <input onChange={this.onEmailChange} value={this.state.email} id='email' type='text' placeholder='Email' />
                            {this.state.emailEmpty ? <h6 className='error'>Invalid email address!</h6> : null}

                            <label htmlFor='password'>Password</label>
                            <input onChange={this.onPasswordChange} value={this.state.password} id='username' type='password' placeholder='Password' />
                            {this.state.error ? <h6 className='error'>{this.state.error}</h6> : null}

                            <Link to='/register'><button type="submit" className="btn btn-outline-success">Register</button></Link>
                            <button type="submit" className="btn btn-outline-secondary">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}