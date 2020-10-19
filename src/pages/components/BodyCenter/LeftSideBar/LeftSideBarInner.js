import React from "react";
import {connect} from "react-redux";
import {getPendingIssues} from '../../../../store/issues/issues.actions'
import * as types from '../../../../store/issues/issues.types'



const LeftSideBarInner =({dispatch})=>{
  const setDispatch=()=>{

  }
    return (
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Pages</li>
            <li>
              <a  className="mm-active">
                <i className="metismenu-icon pe-7s-rocket" />
                All issues
              </a>
            </li>
            <li className="app-sidebar__heading">Issue Pages</li>
            {/*<li>*/}
            {/*  <a onClick={dispatch(getPendingIssues(types.IssueTypes.PENDING))}>*/}
            {/*    <i className="metismenu-icon pe-7s-diamond" />*/}
            {/*    Pending issues*/}
            {/*    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />*/}
            {/*  </a>*/}

            {/*  <div style={divStyle}>*/}

            {/*  /!*<ul>*!/*/}
            {/*  /!*  <li>*!/*/}
            {/*  /!*    <a href="elements-buttons-standard.html">*!/*/}
            {/*  /!*      <i className="metismenu-icon" />*!/*/}
            {/*  /!*      Buttons*!/*/}
            {/*  /!*    </a>*!/*/}
            {/*  /!*  </li>*!/*/}
            {/*  /!*  <li>*!/*/}
            {/*  /!*    <a href="elements-dropdowns.html">*!/*/}
            {/*  /!*      <i className="metismenu-icon"></i>Dropdowns*!/*/}
            {/*  /!*    </a>*!/*/}
            {/*  /!*  </li>*!/*/}
            {/*  /!*  <li>*!/*/}
            {/*  /!*    <a href="elements-icons.html">*!/*/}
            {/*  /!*      <i className="metismenu-icon"></i>Icons*!/*/}
            {/*  /!*    </a>*!/*/}
            {/*  /!*  </li>*!/*/}
            {/*  /!*  <li>*!/*/}
            {/*  /!*    <a href="elements-badges-labels.html">*!/*/}
            {/*  /!*      <i className="metismenu-icon"></i>Badges*!/*/}
            {/*  /!*    </a>*!/*/}
            {/*  /!*  </li>*!/*/}
            {/*  /!*  <li>*!/*/}
            {/*  /!*    <a href="elements-cards.html">*!/*/}
            {/*  /!*      <i className="metismenu-icon"></i>Cards*!/*/}
            {/*  /!*    </a>*!/*/}
            {/*  /!*  </li>*!/*/}
            {/*  /!*  <li>*!/*/}
            {/*  /!*    <a href="elements-list-group.html">*!/*/}
            {/*  /!*      <i className="metismenu-icon"></i>List Groups*!/*/}
            {/*  /!*    </a>*!/*/}
            {/*  /!*  </li>*!/*/}
            {/*  /!*  <li>*!/*/}
            {/*  /!*    <a href="elements-navigation.html">*!/*/}
            {/*  /!*      <i className="metismenu-icon"></i>Navigation Menus*!/*/}
            {/*  /!*    </a>*!/*/}
            {/*  /!*  </li>*!/*/}
            {/*  /!*  <li>*!/*/}
            {/*  /!*    <a href="elements-utilities.html">*!/*/}
            {/*  /!*      <i className="metismenu-icon"></i>Utilities*!/*/}
            {/*  /!*    </a>*!/*/}
            {/*  /!*  </li>*!/*/}
            {/*  /!*</ul>*!/*/}
            {/*  </div>*/}

            {/*</li>*/}
            <li>
              <a onClick={()=>dispatch(getPendingIssues(types.IssueTypes.PENDING))}>
                <i className="metismenu-icon pe-7s-car" />
                Pending
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>

            </li>
            <li>
              <a onClick={()=>dispatch(getPendingIssues(types.IssueTypes.APPROVED))}>
                <i className="metismenu-icon pe-7s-car" />
                Approved
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>

            </li>
            <li>
              <a onClick={()=>dispatch(getPendingIssues(types.IssueTypes.DECLINED))}>
                <i className="metismenu-icon pe-7s-display2" />
                Declined
              </a>
            </li>
            <li className="app-sidebar__heading">Comments</li>
            <li>
              <a >
                <i className="metismenu-icon pe-7s-display2" />
                users comments
              </a>
            </li>
            <div style={divStyle}>
            <li className="app-sidebar__heading">Forms</li>

            {/*<li className="app-sidebar__heading">Charts</li>*/}



            </div>
          </ul>
        </div>
      </div>
    );

}

const divStyle = {
  display: 'none',

};

export default connect(
    null,
    )(LeftSideBarInner)
// export default LeftSideBarInner;
