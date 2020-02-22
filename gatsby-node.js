/* eslint-disable complexity */
/* eslint-env node */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

const CONTENT_TYPE = {
  NEWS: 'news',
  ACTIVITY: 'activity'
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);

    if (fileNode.dir.indexOf('activities') !== -1 && node.frontmatter && node.frontmatter.slug) {
      createNodeField({node, name: 'path', value: `/activities/${node.frontmatter.slug}`});
      createNodeField({node, name: 'type', value: CONTENT_TYPE.ACTIVITY});

      const dateTimestamp = node.frontmatter.date
        ? new Date(node.frontmatter.date).getTime()
        : Number.MAX_SAFE_INTEGER;

      createNodeField({node, name: 'timestamp', value: dateTimestamp});
    } else if (fileNode.dir.indexOf('news') !== -1) {
      createNodeField({node, name: 'path', value: `/nouvelles/${fileNode.name}`});
      createNodeField({node, name: 'type', value: CONTENT_TYPE.NEWS});
    }
  }
};

exports.onCreatePage = ({page, actions}) => {
  const {createPage, deletePage} = actions;

  deletePage(page);
  // You can access the variable "house" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      currentTimestamp: Date.now()
    }
  });
};

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;

  const mapping = {
    [CONTENT_TYPE.NEWS]: path.resolve('src/templates/newsTemplate.js'),
    [CONTENT_TYPE.ACTIVITY]: path.resolve('src/templates/activityTemplate.js'),
  };

  return graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {draft: {ne: true}}}) {
        edges {
          node {
            fields {
              path
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.path,
        component: mapping[node.fields.type],
        context: {
          type: node.fields.type
        }
      });
    });
  });
};
