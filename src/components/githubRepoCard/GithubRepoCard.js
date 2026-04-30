import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const languageColor = repo.node.primaryLanguage?.color || "#6c757d";
  const isArchived = repo.node.isArchived;

  return (
    <div
      className="repo-card-div"
      style={theme ? { backgroundColor: theme.highlight } : {}}
    >
      <Fade bottom duration={2000} distance="40px">
        <div
          key={repo.node.id}
          onClick={() => openRepoinNewTab(repo.node.url)}
          className="repo-card-content"
        >
          <div className="repo-header">
            <div className="repo-name-div">
              <svg
                aria-hidden="true"
                className="octicon repo-svg"
                height="16"
                role="img"
                viewBox="0 0 12 16"
                width="12"
              >
                <path
                  fillRule="evenodd"
                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                ></path>
              </svg>
              <p className="repo-name">{repo.node.nameWithOwner}</p>
            </div>
            {isArchived && <span className="archived-badge">Archived</span>}
          </div>

          <p className="repo-description">
            {repo.node.description || "No description provided"}
          </p>

          <div className="repo-stats-row">
            <div className="repo-stats-left">
              {repo.node.primaryLanguage && (
                <div className="language-badge">
                  <span
                    className="language-dot"
                    style={{ backgroundColor: languageColor }}
                  ></span>
                  <span className="language-name">
                    {repo.node.primaryLanguage.name}
                  </span>
                </div>
              )}
              {repo.node.stargazers?.totalCount > 0 && (
                <div className="stat-item">
                  <svg
                    className="stat-icon"
                    viewBox="0 0 14 16"
                    width="14"
                    height="16"
                    fill="#ffc107"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                    ></path>
                  </svg>
                  <span>{repo.node.stargazers.totalCount}</span>
                </div>
              )}
              {repo.node.forkCount > 0 && (
                <div className="stat-item">
                  <svg
                    className="stat-icon"
                    viewBox="0 0 10 16"
                    width="10"
                    height="16"
                    fill="#667eea"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                    ></path>
                  </svg>
                  <span>{repo.node.forkCount}</span>
                </div>
              )}
            </div>
            <div className="repo-date">
              Updated{" "}
              {new Date(repo.node.updatedAt).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
