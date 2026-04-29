import React, { Component } from "react";
import "./Organizations.css";
import { Fade } from "react-reveal";
import OrganizationList from "../../components/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";

class Organizations extends Component {
  render() {
    const theme = this.props.theme;
    const orgsArray =
      OrganizationsData && OrganizationsData["data"]
        ? OrganizationsData["data"]
        : [];
    return (
      <div id="organizations">
        <div className="organizations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="organizations-header" style={{ color: theme.text }}>
              Contributed Organizations
            </h1>
          </Fade>
        </div>
        {orgsArray.length > 0 ? (
          <OrganizationList logos={orgsArray} />
        ) : (
          <p style={{ color: theme.text }}>
            No organizations data available. Please run git_data_fetcher.mjs to
            fetch data.
          </p>
        )}
      </div>
    );
  }
}

export default Organizations;
