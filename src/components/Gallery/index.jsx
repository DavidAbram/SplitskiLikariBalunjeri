import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const Image = ({ image }) => <PreviewCompatibleImage width="60%" {...image} /> 
;

export const Gallery = ({ images }) => {
  console.log(images);
  return images.map(image => <Image key={image.title} image={image.image} />);
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
          date: node.frontmatter.date,
          image: node.frontmatter.image,
        })
      )} 
    />)}
  />
);

export default GalleryWithQuery;