import axios from 'axios'


export const login = (email, password) => {
    return axios({
        method: 'post',
        url: 'https://book-api.hypetech.xyz/v1/auth/login',
        headers: {
            "Content-Type": "application/json",
            'x-api-key': 'B1tD3V'
        },
        data: {
            email: email,
            password: password
        }
    })
        .then(response => response.data)
        .then(data => {
            localStorage.setItem('myToken', data.accessToken);
        })
        .catch(error => Promise.reject(error.response.data.message))
}

export const register = (name, email, password) => {
    return axios({
        method: 'post',
        url: 'https://book-api.hypetech.xyz/v1/auth/register',
        headers: {
            "Content-Type": "application/json",
            'x-api-key': 'B1tD3V'
        },

        data: {
            name: name,
            email: email,
            password: password
        }

    })
        .catch(error => Promise.reject(error.response.data))
}