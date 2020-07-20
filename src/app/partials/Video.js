import React from 'react';
import { Link } from 'react-router-dom';

export const Video = (props) => {

    return (
        <Link to={`/post/${props.post.id}`}>
            <div className='video-'>
                <div className='video'>
                    <iframe src={props.post.videoUrl}></iframe>
                    <p className='videoPost'></p>
                </div>
            </div>
        </Link>
    )
}
