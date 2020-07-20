import React from 'react'
import { fetchUsers } from '../../../services/userService.js'
import { register } from '../../../services/authService'
import { Link } from 'react-router-dom'


export class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            error: '',

        }
    }

    onNamechange = (e) => {
        this.setState({ name: e.target.value })
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { name, email, password } = this.state

        if (this.state.name && this.state.email && this.state.password) {
            register(name, email, password)
                .then(() => {
                    this.props.history.push('/login')
                })
                .catch(error => this.setState({ error }))
        }
    }

    loadUsers() {
        fetchUsers()
            .then((res) => {

                // console.log(res);
            })
    }
    componentDidMount() {
        this.loadUsers()
    }



    render() {

        return (
            <form className='logreg' onSubmit={this.onSubmit}>
                <div className='container'>
                    <div className='row logreg'>
                        <div className='col-md-6'>
                            <h2>BitBook Register</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum porttitor justo,
                            sollicitudin interdum risus porta sit amet. Nulla egestas neque ullamcorper volutpat dictum.
                            Pellentesque est turpis, lacinia in odio non, tincidunt accumsan diam. Donec purus velit,
                            faucibus sed lectus ut, mollis vulputate enim. Donec eu bibendum sem, id suscipit eros.
                            Vivamus vel iaculis sapien, id convallis justo. Nulla in diam erat. Donec quis mauris bibendum,
                                     pulvinar ligula eget, sodales neque.</p>
                        </div>
                        <div className='col-md-6'>
                            <form>
                                <label htmlFor='username'>Name</label>
                                <input onChange={this.onNamechange} value={this.state.name} id='username' type='text' aria-describedby="emailHelp" placeholder="Full Name" />
                                <label htmlFor='email'>Email</label>
                                <input onChange={this.onEmailChange} value={this.state.email} id='email' type='text' placeholder='Email' />
                                <label htmlFor='password'>Password</label>
                                <input onChange={this.onPasswordChange} value={this.state.password} id='password' type='password' placeholder='Password' />
                                {this.state.error ? <h6 className='error'>User with email alredy exist!</h6> : null}
                                <button type="submit" className="btn btn-outline-success" >Register</button>
                                <Link to='/login'><button type="submit" className="btn btn-outline-secondary">Login</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}





























