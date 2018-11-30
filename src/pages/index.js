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

    <div className="zine-links">
      <p>some links to zines we have made:</p>
      {data.allContentfulZiner.edges.map((post, i) => {
          return (
            <div className="container">
              <h3>{post.node.name}</h3>

              {post.node.linkOne &&
                <a href={post.node.linkOne} target="_blank">{post.node.linkOne}</a>
              }

              {post.node.linkTwo &&
                <a href={post.node.linkTwo} target="_blank">{post.node.linkTwo}</a>
              }

              {post.node.linkThree &&
                <a href={post.node.linkThree} target="_blank">{post.node.linkThree}</a>
              }
            </div>
          )
        })}
    </div>
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
    allContentfulZiner {
      edges {
        node {
          name
          linkOne
          linkTwo
          linkThree
        }
      }
    }
  }
`;

export default IndexPage
