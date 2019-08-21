import React from 'react'
import FriendsList from '../friends-list/FriendsList';
import './homepage.css'
import Navbar from '../navbar/Navbar';

export default function Homepage(props) {
    return (
        <div className="main">
            <Navbar logout={props.logout}/>
            <FriendsList />
        </div>
    )
}
