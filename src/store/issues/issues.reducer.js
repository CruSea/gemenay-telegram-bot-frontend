import * as types from "./issues.types";

const initialState={
    issuesList:[],
    issuesLoading:false,
    networkError:false,
    localIssues:[]
}

const issues=(state=initialState, action)=>{
    switch(action.type){

        case types.RECEIVED_ISSUES:
            return  {
                ...state,
                networkError: false,
                loading: false,
                issuesList: action.issues
            }
        case types.APPROVAL_POSTED:
            return  {
                ...state,
                networkError: false,
                loading: false,

            }
        case types.REQUEST_ISSUES:
            return  {
                ...state,
                networkError: false,
                loading: true,

            }
        case types.LOADING_ERROR:

            return  {
                ...state,
                networkError: true,
                loading: false,
                localIssues: action.a.issues

            }
        default:
            return state
    }
}
  export default  issues
