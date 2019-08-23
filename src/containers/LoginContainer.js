import { connect } from 'react-redux';
import Login from "../components/login/Login";

const mapStateToProps = (state) => {
    return {
        
    }
}

// const authenticate = (username, password, dispatch) => {
//     if (!username && !password) {
//         document.querySelector('.login-failed').textContent = "Please enter username and password";
//         return;
//     }
//     if (username === 'friend' && password === 'HighSchool2006') {

//     } else {
//         document.querySelector('.login-failed').textContent = "Invalid: Either username or/and password is wrong!";
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (username, password) => dispatch({ type: 'ON_LOG_IN', username: username, password: password })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)