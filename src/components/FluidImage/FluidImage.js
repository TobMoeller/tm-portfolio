import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function FluidImage({ imageName, imageClass, imageAlt, imageStyle }) {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            absolutePath: { regex: "/src/(pers_)?images{1}/" }
            relativeDirectory: { eq: "images" }
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
              relativePath
            }
          }
        }
      }
    `
  );

  const { edges } = data.allFile;
  console.log(data);
  edges.filter(({ node }) => node.relativePath === imageName);
  console.log(edges);
  return (
      <div className={imageClass} style={imageStyle}>
          {edges[0] !== undefined ? (
            <Img
              fluid={edges[0].node.childImageSharp.fluid}
              alt={imageAlt}
            />
          ) : (
            <p style={{ fontStyle: "italic" }}>Project thumbnail not available</p>
          )}
      </div>
  );
}
