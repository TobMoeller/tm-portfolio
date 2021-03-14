import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./SkillList.css";

export default function SkillList({ skills, skillCaptions, iconWidth = 64 }) {
  let listStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, ${iconWidth * 1.5}px)`,
    // gap: "2rem",
    justifyContent: "space-between",
  };
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            absolutePath: { regex: "/src/(pers_)?images{1}/" }
            relativeDirectory: { eq: "icons" }
          }
          sort: { order: ASC, fields: base }
        ) {
          edges {
            node {
              name
              relativePath
              publicURL
              id
            }
          }
        }
      }
    `
  );
  const { edges } = data.allFile;
  return (
    <div className="skill-list" style={listStyle}>
      {skills !== undefined && edges !== undefined ? (
        edges
          .filter(({ node }) => skills.includes(node.name))
          .sort(
            ({ node }, { node: node2 }) => skills.indexOf(node.name) - skills.indexOf(node2.name)
          ) // sorts the imageURLs according to the received props
          .map(({ node }, index) => (
            <figure key={node.id} style={{ width: iconWidth + 30 }}>
              <img src={node.publicURL} alt="test" width={iconWidth} />
              <figcaption>
                {skillCaptions !== undefined && skillCaptions[index] !== undefined
                  ? skillCaptions[index]
                  : node.name}
              </figcaption>
            </figure>
          ))
      ) : (
        <p>Oops, something went wrong</p>
      )}
    </div>
  );
}
