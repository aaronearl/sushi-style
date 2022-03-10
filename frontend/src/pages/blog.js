import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  // console.log(data.allSanityPost)
  let posts = data.allSanityPost.nodes.map(post => ({
    ...post,
    slug: post.slug.current,
    author: post.author.name
  }))
  console.log(posts)
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link to={post.slug}>
              {post.title} - {post.author}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPost {
    allSanityPost {
      nodes {
        title
        slug {
          current
        }
        author {
          name
        }
      }
    }
  }
`
