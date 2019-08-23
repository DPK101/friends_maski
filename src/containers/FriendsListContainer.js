import { connect } from 'react-redux';
import FriendsList from '../components/friends-list/FriendsList';

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

// const mapDispatchToProps = () => {
//     return {
//         onLoad: () => dispatchEvent({ type: 'FETCH_SEARCH_RESULT' })
//     }
// }
export default connect(mapStateToProps)(FriendsList);