import { connect } from 'react-redux';


import {setApproval} from '../store/issues/issues.actions'
import MainContentListsRow from "../pages/components/BodyCenter/mainContent/MainContentListsRow";

const mapStateToProps=(state)=>({
    issues: state.issues.issuesList,
    localIssuesList: state.issues.localIssuesList,
    networkError: state.issues.networkError,

})

const mapActionsToProps = { setApproval };
export default connect(
    mapStateToProps,
    mapActionsToProps)(MainContentListsRow)