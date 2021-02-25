import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function ProjectImage({ currentProject, projectTitle, projectWebsite }) {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            absolutePath: { regex: "/src/(pers_)?images{1}/" }
            relativeDirectory: { eq: "projects" }
          }
          sort: { order: ASC, fields: base }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const { edges } = data.allFile;
  console.log(data);
  console.log(projectWebsite);
  return (
    <React.Fragment>
      <div className="project-link">
        <a href={projectWebsite} rel="noreferrer" target="_blank">
          {edges[currentProject] !== undefined ? (
            <Img
              fluid={edges[currentProject].node.childImageSharp.fluid}
              alt={`${projectTitle} thumbnail`}
            />
          ) : (
            <p style={{ fontStyle: "italic" }}>Project thumbnail not available</p>
          )}
        </a>
      </div>
    </React.Fragment>
  );
}
