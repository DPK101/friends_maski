import React, { Component } from 'react'
import { FRIENDS_DATA } from './friends-data';
import Login from './components/login/Login';
import Homepage from './components/homepage/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      friendsData: FRIENDS_DATA
    }
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
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

  logout() {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    if(!this.state.isLoggedIn) {
      return (
        <Router>
          <div>
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <Login authenticate={this.authenticate}/>
              </React.Fragment>
            )} />
          </div>
        </Router>
      )
    } else {
      return (
        <div>
          <Homepage logout={this.logout}/>
        </div>
      )
    }
  }
}
