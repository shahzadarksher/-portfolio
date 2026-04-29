import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";

class IssueChart extends Component {
  render() {
    const open = IssueData && IssueData["open"] ? IssueData["open"] : 0;
    const closed = IssueData && IssueData["closed"] ? IssueData["closed"] : 0;

    const data = {
      labels: ["Open", "Closed"],
      datasets: [
        {
          data: [open, closed],
          backgroundColor: ["#28a745", "#d73a49"],
          hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
        },
      ],
    };

    return (
      <div className="issue-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="issue-chart-header">Issue Distribution</h2>
        </Fade>
        {open || closed ? (
          <Doughnut
            data={data}
            options={{
              margin: "0",
              padding: "0",
              responsive: true,
              maintainAspectRatio: true,
              animation: {
                duration: 4000,
              },
            }}
          />
        ) : (
          <p>
            No issue data available. Please run git_data_fetcher.mjs to fetch
            data.
          </p>
        )}
      </div>
    );
  }
}

export default IssueChart;
