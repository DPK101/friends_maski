import { connect } from 'react-redux';
import MainPage from "../components/MainPage";

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(MainPage);