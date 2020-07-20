import axios from 'axios';
import { User } from '../entities/User'

export const fetchUsers = () => {
    return axios({
        method: 'get',
        url: 'https://book-api.hypetech.xyz/v1/users',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'B1tD3V'
        },

    })

        .then(response => response.data)
        .then(users => {

            const apiUsers = users.map((user) => {
                // console.log(users);

                return new User(user.id, user.avatarUrl, user.name.first, user.name.last, user.email)

            })
            return apiUsers;
        })

}

