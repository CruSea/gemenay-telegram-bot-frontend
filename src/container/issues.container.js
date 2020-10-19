import { connect } from 'react-redux';

import IssuesList from '../pages/issuesList';
import {setApproval} from '../store/issues/issues.actions'

const mapStateToProps=(state)=>({
    issues: state.issues.issuesList,
    localIssuesList: state.issues.localIssuesList,
    networkError: state.issues.networkError,
})
const mapActionsToProps = { setApproval };
export default connect(
    mapStateToProps,
    mapActionsToProps)(IssuesList)