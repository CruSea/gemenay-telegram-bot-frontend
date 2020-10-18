import React from "react";
import LeftSideBar from "./BodyCenter/LeftSideBar/LeftSideBar";
import MainContent from "./BodyCenter/MainContent";

class BodyCenter extends React.Component {
  render() {
    return (
      <div className="app-main">
        {}
        <LeftSideBar></LeftSideBar>
        {}
        {}
        <MainContent></MainContent>
      </div>
    );
  }
}

export default BodyCenter;
