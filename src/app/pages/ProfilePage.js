import React, { Component } from 'react';
import { fetchSingleUser } from '../../services/fetchSingleUser'
import '../../css/profilePage.css'

export class ProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: ''
        }
    }

    componentDidMount() {
        this.showProfile();
    }

    showProfile() {
        fetchSingleUser(this.props.match.params.userId)
            .then((res) => {
                console.log(res);
                return this.setState({ user: res })
            })
    }

    render() {

        const { user } = this.state
        return (
            <div className='fullProfileContainer'>
                <div className='imgDiv'>
                    <img className='profileImg' src={user.avatar} />
                </div>
                <div className='infoDiv'>
                    <p className="fullName">{user.firstName} {user.lastName}</p>
                    <p className="email"> {user.email}</p>
                    <p></p>
                </div>
            </div>
        )
    }
}