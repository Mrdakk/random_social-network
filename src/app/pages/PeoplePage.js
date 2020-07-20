import React from 'react';
import { fetchUsers } from '../../services/userService'
import { PersonItem } from './PersonItem';
import '../../css/peoplePage.css'
// import { Link } from 'react-router-dom';

export class PeoplePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.loadingUser()
    }

    loadingUser = () => {
        fetchUsers()
            .then((res) => {
                return this.setState({ users: res })
            })

    }

    render() {

        const { users } = this.state;

        return (
            <div className='container'>

                {users.map((user, index) => {
                    return <PersonItem user={user} key={index} />
                })}

            </div>
        )
    }
}

