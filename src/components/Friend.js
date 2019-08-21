import React from 'react'
import './friends.css'

export default function Friend(props) {
    return (
        <div className="friend-card">
            <div>
                <img className="friend-image" src={process.env.PUBLIC_URL + '/photos_maski/' + props.friend.name + '-' + props.friend.phone + '.jpg'} alt=""/>
            </div>
            <div className="details">
                {props.friend.name} <br/>
                {props.friend.phone}
            </div>
        </div>
    )
}
