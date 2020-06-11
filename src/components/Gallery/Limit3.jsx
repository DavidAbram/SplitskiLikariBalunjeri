import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Gallery } from './';

const GalleryLimit3 = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "image-gallery"}}}, limit: 3, sort: {fields: frontmatter___date, order: DESC} ) {
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
    render={data => (<Gallery title={props.title} images={
      data.allMarkdownRemark.nodes.map(node => 
        ({
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          image: node.frontmatter.image,
          alt: node.frontmatter.alt,
        })
      )} 
    />)}
  />
);

export default GalleryLimit3;
