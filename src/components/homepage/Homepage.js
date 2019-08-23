import React from 'react'
import './homepage.css'
import NavContainer from '../../containers/NavContainer';
import FriendsListContainer from '../../containers/FriendsListContainer';

export default function Homepage(props) {
    return (
        <div className="main">
            <NavContainer />
            <FriendsListContainer />
        </div>
    )
}
