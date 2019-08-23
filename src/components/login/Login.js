import React, { Component } from 'react'
import './login.css';
import $ from 'jquery';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: ''
        }

        this.authenticateUser = this.authenticateUser.bind(this);

        $(() => {
            $('.txtb input').on('focus', function () {
                $(this).addClass('focus');
            });
            $('.txtb input').on('blur', function () {
                if ($(this).val() === '')
                    $(this).removeClass('focus');
            });
        })
    }

    authenticateUser(username, password, authenticate) {
        if (username === 'friend' && password === 'HighSchool2006') {
            authenticate(username, password);
        }
        else {
            document.querySelector('.login-failed').textContent = "Invalid: Either username or/and password is wrong!";
        }
    }

    render() {
        let username, password;
        const authenticate = this.props.authenticate;
        return (
            <div>
                <form className="login-form" onSubmit={(e) => {
                        e.preventDefault();
                        this.authenticateUser(username.value, password.value, authenticate)
                    }}>
                    <h1 className="login-heading">Login</h1>
                    <span className="login-failed"></span>
                    <div className="txtb">
                        <input type="text" ref={node => username = node} required></input>
                        <span data-placeholder="Username"></span>
                    </div>
                    <div className="txtb">
                        <input type="password" ref={node => password = node} required></input>
                        <span data-placeholder="Password"></span>
                    </div>
                    <button type="submit" className="logbtn">
                        <span style={{position: "relative", top: "-2px"}}>Get in</span> <i className="fas fa-sign-in-alt"></i>
                    </button>
                </form>
            </div>
        )
    }
}
