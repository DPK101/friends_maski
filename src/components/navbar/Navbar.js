import React from 'react'
import './navbar.css'

export default class Navbar extends React.Component {
    render() {
        const { onLogout, onSearch} = this.props;
        let inputData;
        return (
            <nav className="navbar">
                <div className="left-panel">
                    <button className="myButton home">Home <i className="fas fa-home"></i></button>
                    {/* <button className="myButton high-school">High School <i className="fas fa-chalkboard-teacher"></i></button> */}
                </div>
                <div className="right-panel">
                    <form onSubmit={() => console.log('preventdefault then update list')}>
                        <input className="search-input" type="text" name="" id="" ref={node => inputData = node} />
                        <button className="search-button" type="submit" onClick={(e) => { e.preventDefault(); onSearch(inputData.value)}}>
                            <i className="fas fa-search search-icon"></i>
                        </button>
                    </form>
                    <button className="myButton logout" onClick={() => onLogout()}>
                        Logout <i className="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            </nav>
        )
    }
}
