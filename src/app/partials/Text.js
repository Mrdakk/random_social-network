import React from 'react';
import { Link } from 'react-router-dom'

export const Text = (props) => {

    return (
        <Link to={`/post/${props.post.id}`}>
            <div className='text'>
                <div>
                    <p>{props.post.text}</p>
                </div>
            </div>
        </Link>
    )
}