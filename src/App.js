import React, { Component } from 'react'
import { FRIENDS_DATA } from './friends-data';
import Login from './components/login/Login';
import Homepage from './components/homepage/Homepage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      friendsData: FRIENDS_DATA
    }
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate(username, password) {
    if(username === 'friend' && password === 'HighSchool2006') {
      this.setState({
        isLoggedIn: true
      });
    } else {
      alert('Invalid: Either username or/and password is wrong!');
    }
  }

  render() {
    if(!this.state.isLoggedIn) {
      return (
        <div>
          {/* <Login authenticate={this.authenticate}/> */}
          <Homepage /> {/* remove this */}
        </div>
      )
    } else {
      return (
        <div>
          <Homepage />
        </div>
      )
    }
  }
}
