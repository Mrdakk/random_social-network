import axios from 'axios';
import { User } from '../entities/User'

export const fetchSingleUser = (userId) => {
    return axios({
        method: 'get',
        url: `https://book-api.hypetech.xyz/v1/users/${userId}`,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'B1tD3V'
        }

    })

        .then(response => response.data)
        .then(apiUser => {
            return new User(apiUser.id, apiUser.avatarUrl, apiUser.name.first, apiUser.name.last, apiUser.email)
        })
}


