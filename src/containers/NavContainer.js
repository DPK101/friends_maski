import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar';

const mapStateToProps = (state) => {
    return {
        data: state.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInit: () => dispatch({ type: 'FETCH_FRIENDS_LIST' }),
        onSearch: (query) => { 
            if(!query) {
                dispatch({ type: 'RESET_INITIAL_DATA' })
            } else {
                dispatch({ type: 'FETCH_SEARCH_RESULT', query: query })
            }
        },
        onLogout: () => dispatch({ type: 'LOG_OUT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);