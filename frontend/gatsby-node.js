const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blogPost.js')

  const postsResult = await graphql(
    `
      query {
        allSanityPost(sort: { order: DESC, fields: publishedAt }) {
          nodes {
            _id
            slug {
              current
            }
          }
        }
      }
    `
  )

  if (postsResult.errors) {
    throw postsResult.errors
  }

  const posts = postsResult.data.allSanityPost.nodes

  posts.forEach(post => {
    createPage({
      path: `blog/${post.slug.current}`,
      component: blogPost,
      context: {
        id: post._id
      }
    })
  })
}
