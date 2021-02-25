import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Content from "../components/Content/Content";
import SEO from "../components/SEO/SEO";

export default function Home({ data }) {
  const { edges: sections } = data.allMdx;
  return (
    <React.Fragment>
      <SEO />
      <Layout sections={sections}>
        <Content sections={sections} />
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
