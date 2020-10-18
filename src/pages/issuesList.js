import React, {useState} from "react";

const IssuesList=({issues, setApproval})=>{
console.log("isL",issues)

    return(
        <div className="container">
        <div className="row">
        {
            issues.map(issue=>
                <Issue key={issue.id}
                    issue={issue}
                       setApproval={setApproval}
                    /*{...setApproval}*/
                />
            )
        }
            
        </div>

        </div>
    )
}

const Issue =({issue={}, setApproval})=>{
    const [accepted, setAccepted] = useState(issue.status===1);
    const [declined, setDeclined] = useState(issue.status===2);

    const handleAccept=()=> {
        setAccepted(true)
        setDeclined(false)
        console.log("accepted",accepted)
        setApproval(issue.id, 1)

    }
    const handleDecline=()=> {
        setDeclined(true)
        setAccepted(false)
        console.log("dec",declined)
        setApproval(issue.id, 2)
    }
    return (
        <div className="card text-center">
            {/*<div className="card-header">*/}
            {/*    Featured*/}
            {/*</div>*/}
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button onClick={handleDecline} className="btn btn-danger disabled">Decline</button>
                <button onClick={handleAccept} className="btn btn-primary">Accept</button>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    )
}

export default IssuesList