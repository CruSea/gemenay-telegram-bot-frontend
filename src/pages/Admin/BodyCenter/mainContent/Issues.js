import React, {useState} from "react";
import * as types from '../../../../store/issues/issues.types'
import NoItems from "./dumb.components/noContent";
import Comments from "./comments";
import {useDispatch} from "react-redux";
import {getComments} from "../../../../store/comments/comments.actions";

function SingleIssue({issue={}, setApproval, setDisplay}) {

  const dispatch = useDispatch();
  const [status, setStatus] = useState("pending");


  switch (issue.status) {
    case false:
      setStatus(types.IssueStatuses.PENDING)

          break
    case true:
      setStatus(types.IssueStatuses.APPROVED)

          break
    case 3:
      setStatus(types.IssueStatuses.DECLINED)

      break
    default:
      break

  }
  let className = 'badge';
  switch (status) {
    case false:
      className += ' badge-warning';
          break
    case true:

      className += ' badge-success';
          break
    case 3:
      className += ' badge-danger';
      break
    default:
      break

  }

  // if (status === types.setIssue.APPROVE) {
  //
  // }else if (status === types.setIssue.DECLINE){
  //
  // }else {
  //
  // }
  const handleAccept=()=> {
    setStatus(types.IssueStatuses.APPROVED)
    setApproval(issue.id, types.setApiIssue.APPROVE)

  }
  const handleDecline=()=> {
    setStatus(types.IssueStatuses.DECLINED)
    setApproval(issue.id, types.setApiIssue.DECLINE)
  }
  const showComment=()=>{
    dispatch(getComments(issue.id))
    setDisplay(true)
  }




  return <tr>

    <td className="text-center text-muted">{issue.id}</td>
    <td>
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-left mr-3">
            <div className="widget-content-left">
              {issue.issue}
            </div>
          </div>
          <div className="widget-content-left flex2">

          </div>
        </div>
      </div>
    </td>
    <td className="text-center">{issue.user_id}</td>
    <td className="text-center">
      <div className={className}>{status}</div>
    </td>
    <td className="text-center">
      {status!==types.IssueStatuses.APPROVED&&
      <button
          disabled={status===types.IssueStatuses.APPROVED}
          onClick={handleAccept}
          type="button"
          id="PopoverCustomT-1"
          className="btn btn-success btn-sm"
      >
        Approve
      </button>
      }

    </td>
    <td className="text-center">
      {status!==types.IssueStatuses.DECLINED&&
      <button
          disabled={status===types.IssueStatuses.DECLINED}
          onClick={handleDecline}
          type="button"
          id="PopoverCustomT-1"
          className="btn btn-danger btn-sm"
      >
        Decline
      </button>

      }

    </td>
    <td className="text-center">
      <button
          onClick={showComment}
          type="button"
          id="PopoverCustomT-1"
          className="btn btn-primary btn-sm"
      >
        comments
      </button>
    </td>
  </tr>;
}


const Issues=({issues, setApproval, })=>{

  const [displayComment, SetDisplay]= useState(false);

  let  isuues=issues.issuesList
  let  networkError=issues.networkError
  //TODO if local and api data mix comment out this
  if(networkError===true){
    isuues=issues.localIssues

  }

  const hasIssues= isuues!==undefined&&isuues.length>0;

  const nodes = hasIssues ? (
      isuues.map(issue=>
          <SingleIssue key={issue.id}
                       issue={issue}
                       setApproval={setApproval}
                       setDisplay={SetDisplay}
              /*{...setApproval}*/
          />
      )

  ) : (
      <tr>
      <td>

      <NoItems/>
      </td>

      </tr>
  )
    return (
        <div>
         <Comments display={displayComment} setDisplay={SetDisplay}/>
      <div className="row">
        <div className="col-md-12">
          <div className="main-card mb-3 card">
            {networkError&& <li className="list-group-item-danger list-group-item">There is some Error <br/> isuues are from local cash</li>}

            <div className="card-header">
              Users Issues
              <div className="btn-actions-pane-right">
                <div role="group" className="btn-group-sm btn-group">
                  <button className="active btn btn-focus">Preveous</button>
                  <button className="btn btn-focus">Next</button>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                <tr>
                  <th className="text-center">Id</th>
                  <th>Issue</th>
                  <th className="text-center">User Id</th>
                  <th className="text-center">Status</th>
                  <th className="text-center"><i className="pe-7s-check"/>  Aprove</th>
                  <th className="text-center"><i className="pe-7s-close-circle"/>  Decline</th>
                  <th className="text-center"> <i className="pe-7s-comment"/> comments</th>
                </tr>
                </thead>
                <tbody>
                {/*{<Comments/>}*/}
                {nodes}
                </tbody>
              </table>
            </div>

            <div className="d-block text-center card-footer">
              <button className="mr-2 btn-icon btn-icon-only btn btn-outline-secondary">
                Prev
              </button>
              <button className="mr-2 btn-icon btn-icon-only btn btn-outline-secondary">
                Next
              </button>
              {/*<button className="btn-wide btn btn-success">Save</button>*/}
            </div>
          </div>
        </div>
      </div>
          </div>
    );

}

export default Issues;

