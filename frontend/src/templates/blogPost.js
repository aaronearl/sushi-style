import React from 'react'
import { graphql } from 'gatsby'
// import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
// import Seo from '../components/Seo'
// import Share from '../components/Share'
// import YouTube from '../components/YouTube'
// import PortableText from '../components/portableText.js'
// import '../sass/posts.scss'
// import '../sass/terminal.scss'

function BlogPost(props) {
  console.log(props.data.sanityPost)
  const post = {
    ...props.data.sanityPost,
    slug: props.data.sanityPost.slug.current
  }

  return (
    <Layout>
      <div className='container'>
        <article className='post'>
          <div>
            <h1 className='post-title'>{post.title}</h1>
            <p className='post-date'>{post.publishedAt}</p>
          </div>
          {/* <section> */}
          {/*   {post.youTubeVideoId && <YouTube id={post.youTubeVideoId} />} */}
          {/*   {post._rawMainContent && ( */}
          {/*     <PortableText blocks={post._rawMainContent} /> */}
          {/*   )} */}
          {/* </section> */}
        </article>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    sanityPost(_id: { eq: $id }) {
      _id
      title
      slug {
        current
      }
      publishedAt(formatString: "MM/DD/YYYY")
    }
  }
`
