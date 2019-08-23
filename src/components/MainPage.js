import React, { Component } from 'react'
import LoginContainer from '../containers/LoginContainer';
import Homepage from './homepage/Homepage';

export default class MainPage extends Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (!isLoggedIn) {
            return (
                <div>
                    <LoginContainer />
                </div>
            )
        } 
        else {
            return (
                <div>
                    <Homepage />
                </div>
            )
        }
    }
}
