import React from 'react';
import Friend from '../Friend';
import '../friends.css'

const listAllFriends = (data) => {
    return data.map(friend => {
        return <Friend key={friend.phone.toString().slice(0,4)+friend.name} friend={friend}/>
    })
}

const FriendsList = (props) => {
    const {data} = props;
    return (
        <div className="friends-list">
            {listAllFriends(data)}
        </div>
    )
}

export default FriendsList;