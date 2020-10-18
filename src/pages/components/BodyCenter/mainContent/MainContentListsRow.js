import React, {useState} from "react";
import * as types from '../../../../store/issues/issues.types'

function SingleIssue({issue={}, setApproval}) {

  const [status, setStatus] = useState("pending");

  const handleAccept=()=> {
    setStatus(types.setIssue.APPROVE)
    setApproval(issue.id, types.setIssue.APPROVE)

  }
  const handleDecline=()=> {
    setStatus(types.setIssue.DECLINE)
    setApproval(issue.id, types.setIssue.DECLINE)
  }

  let className = 'badge';
  if (status === types.setIssue.APPROVE) {
    className += ' badge-success';
  }else if (status === types.setIssue.DECLINE){
    className += ' badge-danger';
  }else {
    className += ' badge-warning';
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
      <button
          type="button"
          id="PopoverCustomT-1"
          className="btn btn-primary btn-sm"
      >
        comments
      </button>
    </td>
    <td className="text-center">
      <button
          disabled={status===types.setIssue.APPROVE}
          onClick={handleAccept}
          type="button"
          id="PopoverCustomT-1"
          className="btn btn-success btn-sm"
      >
        Approve
      </button>
    </td>
    <td className="text-center">
      <button
          disabled={status===types.setIssue.DECLINE}
          onClick={handleDecline}
          type="button"
          id="PopoverCustomT-1"
          className="btn btn-danger btn-sm"
      >
        Decline
      </button>
    </td>
  </tr>;
}

const MainContentListsRow=({issues, setApproval})=>{

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="main-card mb-3 card">
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
                  <th className="text-center">comments</th>
                  <th className="text-center">Aprove</th>
                  <th className="text-center">Decline</th>
                </tr>
                </thead>
                <tbody>
                {
                  issues.map(issue=>
                      <SingleIssue key={issue.id}
                             issue={issue}
                             setApproval={setApproval}
                          /*{...setApproval}*/
                      />
                  )
                }



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
    );

}

export default MainContentListsRow;
