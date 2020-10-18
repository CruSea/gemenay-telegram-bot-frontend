import React from "react";
import MainContentHeader from "./mainContent/MainContentHeader";
import MainContentCardsRow from "./mainContent/MainContentCardsRow";
import MainContentGraphRow from "./mainContent/MainContentGraphRow";
import MainContent2ndCardsRow from "./mainContent/MainContent2ndCardsRow";
import MainContentListsRow from "../../../container/adminIssues.container";

import MainContentFooter from "./mainContent/MainContentFooter";

class MainContent extends React.Component {
  render() {
    return (
      <div className="app-main__outer">
        <div className="app-main__inner">
          <MainContentHeader/>
          {/*<MainContentCardsRow></MainContentCardsRow>*/}
          {/*<MainContentGraphRow></MainContentGraphRow>*/}
          {/*<MainContent2ndCardsRow></MainContent2ndCardsRow>*/}
          <MainContentListsRow/>
          {/*<MainContentLittleCardsRow></MainContentLittleCardsRow>*/}
        </div>
        <MainContentFooter/>{" "}
      </div>
    );
  }
}

export default MainContent;
