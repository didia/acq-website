// Vendor
import React from 'react'
import {graphql} from 'gatsby';
import T from 'prop-types';

import Home from '../components/Home';

import { MainLayout } from "../components/public";
import SEO from "../components/SEO";

const IndexPage = ({data}) => {
  const activityEntries = data.activities.edges.map(edge => ({
    ...edge.node.fields,
    ...edge.node.frontmatter,
    content: edge.node.html

  }));

  const newsEntries = data.news.edges.map(edge => ({
    ...edge.node.fields,
    ...edge.node.frontmatter,
    content: edge.node.html
  }));

  const activities = {
    entries: activityEntries,
    hasMore: data.activities.pageInfo.hasNextPage
  };

  const news = {
    entries: newsEntries,
    hasMore: data.news.pageInfo.hasNextPage
  };

  return (
    <MainLayout render={() => (
      <>
        <SEO title="Association des congolais de Québec" keywords={[`ACQ`, `Québec`, `Congo`, `Congolais`]} />
        <Home activities={activities} news={news} defaultNewsThumbnail={data.defaultNewsThumbnail} />
      </>
    )}/>
  );
};

IndexPage.propTypes = {
  data: T.shape({
    activities: T.object.isRequired,
    news: T.object.isRequired,
    defaultNewsThumbnail: T.object.isRequired
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query PageQuery {
    activities: allMarkdownRemark(
      limit: 3
      sort: {fields: [frontmatter___date], order: ASC} 
      filter: {fields: {type: {eq: "activity"}}, frontmatter: {draft: {eq: false}}}
    ) {
      edges {
        node {
          html
          fields {
            path
          }
          frontmatter {
            excerpt
            slug
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 584, maxHeight: 394, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
    news: allMarkdownRemark(
      limit: 3
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {fields: {type: {eq: "news"}}, frontmatter: {draft: {eq: false}}}
    ) {
      edges {
        node {
          html
          fields {
            path
          }
          frontmatter {
            date
            excerpt
            title
            thumbnail {
              childImageSharp {
                fluid(maxHeight: 300, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
    defaultNewsThumbnail: imageSharp(fluid: {originalName: {regex: "/placeholder-news.jpg/"}}) {
      fluid(maxHeight: 300, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
