import React from 'react'
import FriendsList from '../friends-list/FriendsList';
import './homepage.css'

export default function Homepage() {
    return (
        <div className="main">
            <nav className="navbar">
                <div className="left-panel">
                    <button className="myButton home">Home <i className="fas fa-home"></i></button>
                    <button className="myButton high-school">High School <i className="fas fa-chalkboard-teacher"></i></button>
                </div>
                <div className="right-panel">
                    <form onSubmit={() => console.log('preventdefault then update list')}>
                        <input className="search-input" type="text" name="" id=""/>
                        <button className="submit-button" type="submit">
                            <i className="fas fa-search search-icon"></i>
                        </button>
                    </form>
                </div>
            </nav>
            <FriendsList />
        </div>
    )
}
