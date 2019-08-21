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
        this.validate = this.validate.bind(this);
        this.hangleChangeOfUsername = this.hangleChangeOfUsername.bind(this);
        this.hangleChangeOfPassword = this.hangleChangeOfPassword.bind(this);

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

    validate() {
        this.props.authenticate(this.state.username, this.state.password);
    }

    hangleChangeOfUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    hangleChangeOfPassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="login-form">
                    <h1>Login</h1>
                    <div className="txtb">
                        <input type="text" onChange={this.hangleChangeOfUsername} value={this.state.username}></input>
                        <span data-placeholder="Username"></span>
                    </div>
                    <div className="txtb">
                        <input type="password" onChange={this.hangleChangeOfPassword} value={this.state.password}></input>
                        <span data-placeholder="Password"></span>
                    </div>
                    <input type="submit" className="logbtn" value="Login" onClick={this.validate}></input>
                </div>
            </div>
        )
    }
}
