import React from "react";
import HeaderTopBar from "./HeaderTopBar";
import RightSideBar from "./rightSideBar/RightSideBar";
import BodyCenter from "./BodyCenter";

import '../../assets/main.css'
class Body extends React.Component {
  render() {
    return (
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        {}
        <HeaderTopBar/>
        {}
        {}
        {/*<RightSideBar></RightSideBar>*/}
        {}
        {}
        <BodyCenter/>
      </div>
    );
  }
}

export default Body;
