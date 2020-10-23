// Category Types
export const LOADING_ERROR = 'LOADING_ERROR';
export const POST_ERROR = 'POST_ERROR';

export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const RECEIVED_ISSUES = 'RECEIVED_ISSUES';

export const POSTING_APPROVAL = 'POSTING_APPROVAL';
export const APPROVAL_POSTED = 'APPROVAL_POSTED';

//Dont touch this this is important for the api end Point
export const IssueApiTypes = {
    APPROVED: 'getApproved',
    DECLINED: 'getDeclined',
    PENDING: 'pending',
}

//Dont touch this this is important for the api end Point
export const setApiIssue = {
    APPROVE: 'approve',
    DECLINE: 'decline',
}
export const IssueStatuses = {
    APPROVED: 'approved',
    DECLINED: 'declined',
    PENDING: 'pending',
}