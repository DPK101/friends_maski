import React from 'react';
import { FRIENDS_DATA } from '../../friends-data';
import Friend from '../Friend';
import '../friends.css'

const listAllFriends = () => {
    return FRIENDS_DATA.map(friend => {
        return <Friend key={friend.phone.toString().slice(0,4)+friend.name} friend={friend}/>
    })
}

const FriendsList = () => {
    return (
        <div className="friends-list">
            {listAllFriends()}
        </div>
    )
}

export default FriendsList;