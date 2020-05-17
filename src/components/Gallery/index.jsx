import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { colors, font } from '../styles';
import PreviewCompatibleImage from '../PreviewCompatibleImage';


export const Image = ({ image }) => <PreviewCompatibleImage width="100%" {...image} /> 
;

const StyledH2 = styled.h2`
  ${font.fluidSize(18,24, font.family)}
  font-weight: 700;
  color: ${colors.primaryDark};
  padding-bottom: 10px;
  border-bottom: 3px solid ${colors.primaryDark};
`;


export const Gallery = ({ images }) => {
  return (
    <>
      <StyledH2>Gallery</StyledH2>
      {
        images.map(image => <Image key={image.title} image={image.image} />)
      }
    </>);
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