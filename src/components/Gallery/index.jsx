import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const Image = () => (
  <>
  </>
);

export const Gallery = ({ images }) => {
  console.log(images);
  return (
    <div>
    </div>
  )
};


const GalleryWithQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "image-gallery"}}}, limit: 3 ) {
          nodes {
            frontmatter {
              title
              date
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
            }
          }
        }
      }
    `}
    render={data => (<Gallery images={
      data.allMarkdownRemark.nodes.map(node => 
        ({
          title: node.frontmatter.title,
          date: node.frontmatter.position,
          image: node.frontmatter.image,
        })
      )} 
    />)}
  />
);

export default GalleryWithQuery;