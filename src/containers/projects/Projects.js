import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";
import { greeting } from "../../portfolio.js";

export default function Projects() {
  const [repo, setrepo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "${openSource.githubUserName}") {
              ... on User {
                repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
                  totalCount
                  edges {
                    node {
                      nameWithOwner
                      name
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      isPrivate
                      isArchived
                      updatedAt
                      createdAt
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        const allRepos = result.data.repositoryOwner.repositories.edges;
        setrepoFunction(allRepos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
        setLoading(false);
        // Set empty array on error
        setrepoFunction([]);
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <div className="main" id="opensource">
      <div className="project-header">
        <h1 className="project-title">🚀 All GitHub Projects</h1>
        <p className="project-subtitle">
          Explore {repo.length} of my repositories
        </p>
      </div>
      {loading ? (
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading projects...</p>
        </div>
      ) : (
        <>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              return <GithubRepoCard repo={v} key={v.node.id} />;
            })}
          </div>
          {repo.length === 0 && (
            <div className="no-projects-message">
              <p>No public repositories found.</p>
            </div>
          )}
        </>
      )}
      <div className="project-footer">
        <Button
          text={"View More on GitHub"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
        />
      </div>
    </div>
  );
}
