import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./Content.css";
import { useLanguage } from "../Context/ContextProvider";

export default function Content({ sections }) {
  const language = useLanguage();
  return (
    <React.Fragment>
      {sections
        .filter(({ node }) => node.frontmatter.title && node.frontmatter.lang === language)
        .map(({ node: section }) => (
          <section id={section.frontmatter.title} key={section.id}>
            <div className="content">
              <MDXRenderer>{section.body}</MDXRenderer>
            </div>
          </section>
        ))}
    </React.Fragment>
  );
}
