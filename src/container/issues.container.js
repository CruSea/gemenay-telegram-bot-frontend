import { connect } from 'react-redux';

import IssuesList from '../components/issuesList';
import {setApproval} from '../store/issues/issues.actions'

const mapStateToProps=(state)=>({
    issues: state.issues.issuesList
})
const mapActionsToProps = { setApproval };
export default connect(
    mapStateToProps,
    mapActionsToProps)(IssuesList)