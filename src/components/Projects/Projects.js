import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./Projects.css";
import { useLanguage } from "../Context/ContextProvider";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const language = useLanguage();
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: frontmatter___order, order: ASC }
          filter: { fileAbsolutePath: { regex: "/src/(pers_)?projects{1}/" } }
        ) {
          edges {
            node {
              slug
              body
              id
              frontmatter {
                lang
                title
                projectWebsite
              }
            }
          }
        }
      }
    `
  );

  const { edges } = data.allMdx;
  const projects = edges.filter(({ node }) => node.frontmatter.lang === language);

  const changeSlides = (n, type = "default") => {
    switch (type) {
      case "+":
        if (currentProject + n < projects.length) setCurrentProject(currentProject + n);
        else setCurrentProject(0);
        break;
      case "-":
        if (currentProject - n >= 0) setCurrentProject(currentProject - n);
        else setCurrentProject(projects.length - 1);
        break;
      default:
        if (n >= 0 && n < projects.length) setCurrentProject(n);
        else setCurrentProject(1);
        break;
    }
  };
  const DotButton = ({ currentProject, index, changeSlides }) => {
    return (
      <button
        className={`dot ${currentProject === index ? "active" : ""}`}
        onClick={() => changeSlides(index)}
        aria-labelledby={`dot${index + 1} ${currentProject === index ? "active" : ""}`}
      />
    );
  };
  return (
    <div className="projects-wrapper">
      {/* {projects.map(({ node: project }, index) => (
        <div className="project  fade" key={`project${index}`}>
          <div className={project.slug + " " + index}>
            <MDXRenderer>{project.body}</MDXRenderer>
          </div>
        </div>
      ))} */}
      <div className="project">
        {/* <ProjectImage
          currentProject={currentProject}
          projectTitle={projects[currentProject].node.frontmatter.title}
        /> */}
        <MDXRenderer
          currentProject={currentProject}
          projectWebsite={projects[currentProject].node.frontmatter.projectWebsite}
          projectTitle={projects[currentProject].node.frontmatter.title}
        >
          {projects[currentProject].node.body}
        </MDXRenderer>
      </div>
      <button className="prev" onClick={() => changeSlides(1, "-")}>
        &#10094;
      </button>
      <button className="next" onClick={() => changeSlides(1, "+")}>
        &#10095;
      </button>
      <div style={{ textAlign: "center" }}>
        {projects.map((item, index) => (
          <DotButton
            currentProject={currentProject}
            index={index}
            changeSlides={changeSlides}
            key={item.node.id}
          />
        ))}
      </div>
    </div>
  );
}
