import {combineReducers} from 'redux';
import * as types from "./issues.types";

 const issuesList = (state = [], action) => {
     // console.log("reducer",action)
    switch (action.type) {
      case types.RECEIVED_ISSUES:
        return action.issues
        // case types.APPROVAL_POSTED:
        //     return {
        //        ...state,
        //
        //         ...action.id
        //     }
      default:
        return state
    }
  }
  const localIssuesList = (state = [], action) => {
     // console.log("reducer",action)
    switch (action.type) {
      case types.NETWORK_ERROR:
        return action.issues

      default:
        return state
    }
  }

  const issuesLoading = (state= false, action)=>{
      switch(action.type){
          case types.RECEIVED_ISSUES:
              return false;
        case types.REQUEST_ISSUES:
            return true;
        case types.LOADING_ERROR:
            return false;
        default:
            return state
      }
  }

const networkError = (state= false, action)=>{
    switch(action.type){
        case types.RECEIVED_ISSUES:
            return false;
        case types.REQUEST_ISSUES:
            return false;
        case types.LOADING_ERROR:
            return true;
        default:
            return state
    }
}

  export default combineReducers({
    issuesLoading,   
    issuesList,
      localIssuesList,
      networkError

  })
