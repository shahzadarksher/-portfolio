import React, { Component } from "react";
import "./Issues.css";
import { Fade } from "react-reveal";
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";

class Issues extends Component {
  render() {
    const theme = this.props.theme;
    const issuesArray =
      issuesData && issuesData["data"] ? issuesData["data"] : [];
    return (
      <div>
        <div className="issues-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="issues-header" style={{ color: theme.text }}>
              Issues
            </h1>
          </Fade>
        </div>
        <div className="issues-body-div">
          {issuesArray.length > 0 ? (
            issuesArray.map((issue) => {
              return <IssueCard issue={issue} key={issue.id} />;
            })
          ) : (
            <p style={{ color: theme.text }}>
              No issues data available. Please run git_data_fetcher.mjs to fetch
              data.
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Issues;
