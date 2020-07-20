import axios from 'axios';
import { Post } from '../entities/Post'

export const singlePost = (userId) => {
    return axios({
        method: 'get',
        url: `https://book-api.hypetech.xyz/v1/posts/${userId}`,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem('myToken')}`
        },

    })

        .then(response => response.data)
        .then(apiPost => {
            console.log(apiPost);

            return new Post(apiPost.text, apiPost.type, apiPost.imageUrl, apiPost.videoUrl, apiPost.id, apiPost.userId)
        })
}