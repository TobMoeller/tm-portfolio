import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

export default function Impressum({ data }) {
  const { edges: sections } = data.allMdx;

  return (
    <React.Fragment>
      <SEO title="Impressum" description="Impressum für Tobias Möller's Portfolio" />
      <Layout sections={sections}>
        <section id="impressum">
          <div className="content">
            <h1>Impressum</h1>
            <p>Hier ist Platz für dein Impressum</p>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___order, order: ASC }
      filter: { fileAbsolutePath: { regex: "/src/(pers_)?sections{1}/" } }
    ) {
      edges {
        node {
          slug
          body
          id
          frontmatter {
            lang
            title
          }
        }
      }
    }
  }
`;
