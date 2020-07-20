import React from 'react';
import '../../css/peoplePage.css'
import { Link } from 'react-router-dom';


export const PersonItem = (props) => {
    // console.log(props.user);

    return (
        <div className='row main-div'>

            <div className='col-4 left-div'>
                <Link to={`/profile/${props.user.userId}`}> <img className='avatar' src={props.user.avatar} alt="img" /></Link>
            </div>
            <div className='col-8 right-div' >
                <p>Full Name: {props.user.getFullName()}</p>
                <p>Email: {props.user.email}</p>
            </div>
        </div >
    )
}
