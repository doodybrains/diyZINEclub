import React from 'react'
import '../assets/stylesheets/index.scss'

const IndexPage = ({data}) => (
  <div>
    {data.allContentfulPost.edges.map((post, i) => {
      return (
        <div className="container">
          <h2>{post.node.title}</h2>
          <img src={post.node.image.file.url} />
          <p>{post.node.blurb}<span> {post.node.moreInfo}</span></p>
        </div>
      )
    })}
  </div>
)

export const query = graphql`
  query PostQuery {
    allContentfulPost {
      edges {
        node {
          title
          image {
            file {
              url
            }
          }
          blurb
          moreInfo
        }
      }
    }
  }
`;

export default IndexPage
