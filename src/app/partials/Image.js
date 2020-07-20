import React from 'react';
import { Link } from 'react-router-dom'

export const Image = (props) => {

    return (
        <Link to={`/post/${props.post.id}`}>
            <div className='image'>
                <div className='image'>
                    <img src={props.post.imageUrl} alt='img' />
                </div>
            </div>
        </Link>
    )
}