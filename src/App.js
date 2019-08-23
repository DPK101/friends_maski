import React, { Component } from 'react'
import { FRIENDS_DATA } from './friends-data';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainContainer from './containers/MainContainer';

const defaultState = {
  isLoggedIn: false,
  data: [...FRIENDS_DATA],
  visibilityFilter: 'SHOW_ALL'
}

const filterData = (defaultState, action) => {
  return [...defaultState.data.filter(friend_detail => {
    return (friend_detail.phone.toString().includes(action.query) || friend_detail.name.toLowerCase().includes(action.query))
  })]
}

const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'ON_LOG_IN': return { ...defaultState, isLoggedIn: true }
    case 'FETCH_SEARCH_RESULT':
      return {
        isLoggedIn: true,
        data: filterData(defaultState, action),
        visibilityFilter: 'SEARCH_RESULTS'
      }
    case 'RESET_INITIAL_DATA': return { ...defaultState, isLoggedIn:  true };
    case 'LOG_OUT':
      return {
        ...state, isLoggedIn: false
      }
    default: return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )
  }
}
