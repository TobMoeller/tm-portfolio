import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import NotFoundSection from "../components/NotFoundSection/NotFoundSection";
import SEO from "../components/SEO/SEO";

export default function notFound({ data }) {
  const { edges: sections } = data.allMdx;

  return (
    <React.Fragment>
      <SEO title="404" description="404 - Seite nicht gefunden" />
      <Layout sections={sections}>
        <NotFoundSection />
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
