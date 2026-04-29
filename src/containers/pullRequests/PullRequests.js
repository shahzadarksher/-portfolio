import React, { Component } from "react";
import "./PullRequests.css";
import { Fade } from "react-reveal";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import pullRequestsData from "../../shared/opensource/pull_requests.json";

class PullRequests extends Component {
  render() {
    const theme = this.props.theme;
    const pullRequestsArray =
      pullRequestsData && pullRequestsData["data"]
        ? pullRequestsData["data"]
        : [];
    return (
      <div>
        <div className="pull-requests-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="pull-requests-header" style={{ color: theme.text }}>
              Pull Requests
            </h1>
          </Fade>
        </div>
        <div className="pull-request-body-div">
          {pullRequestsArray.length > 0 ? (
            pullRequestsArray.map((pullRequest) => {
              return (
                <PullRequestCard
                  pullRequest={pullRequest}
                  key={pullRequest.id}
                />
              );
            })
          ) : (
            <p style={{ color: theme.text }}>
              No pull requests data available. Please run git_data_fetcher.mjs
              to fetch data.
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default PullRequests;
